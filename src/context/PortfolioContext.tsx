import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  onSnapshot
} from 'firebase/firestore';

import {
  PERSONAL_DETAILS,
  EDUCATION_DATA,
  SKILL_CATEGORIES,
  PROJECTS_DATA,
  ACHIEVEMENTS_DATA,
  EXPERIENCE_DATA,
  STATS_DATA
} from '../data/portfolioData';

const firebaseConfig = {
  apiKey: "AIzaSyCeudq7kNL0NzHZKDthknc7UC0QFCzxr5Y",
  authDomain: "portfolio-admin-4a3bd.firebaseapp.com",
  projectId: "portfolio-admin-4a3bd",
  storageBucket: "portfolio-admin-4a3bd.firebasestorage.app",
  messagingSenderId: "803002632579",
  appId: "1:803002632579:web:e2097d3ddc6add99360eb6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export interface PortfolioSchema {
  personal: typeof PERSONAL_DETAILS;
  education: typeof EDUCATION_DATA;
  skills: typeof SKILL_CATEGORIES;
  projects: typeof PROJECTS_DATA;
  achievements: typeof ACHIEVEMENTS_DATA;
  experience: typeof EXPERIENCE_DATA;
  stats: typeof STATS_DATA;
}

interface PortfolioContextType {
  data: PortfolioSchema;
  loading: boolean;
}

const defaultPortfolio: PortfolioSchema = {
  personal: PERSONAL_DETAILS,
  education: EDUCATION_DATA,
  skills: SKILL_CATEGORIES,
  projects: PROJECTS_DATA,
  achievements: ACHIEVEMENTS_DATA,
  experience: EXPERIENCE_DATA,
  stats: STATS_DATA
};

const PortfolioContext =
  createContext<PortfolioContextType>({
    data: defaultPortfolio,
    loading: true
  });

export const PortfolioProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] =
    useState<PortfolioSchema>(defaultPortfolio);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const portfolioRef = doc(
      db,
      "portfolio_data",
      "main"
    );

    const unsubscribe = onSnapshot(
      portfolioRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const remote = docSnap.data();

          /*
           * Firestore currently contains the older/simple
           * structure:
           *
           * fullName
           * tagline
           * bio
           * avatarUrl
           * skills
           * projects
           *
           * Convert it into the structure used by the
           * React components.
           */

          const personal =
            remote.personal ||
            (remote.fullName
              ? {
                  ...defaultPortfolio.personal,

                  name:
                    remote.fullName ||
                    defaultPortfolio.personal.name,

                  tagline:
                    remote.tagline ||
                    defaultPortfolio.personal.tagline,

                  bio:
                    remote.bio ||
                    defaultPortfolio.personal.bio,

                  profileImage:
                    remote.avatarUrl ||
                    defaultPortfolio.personal.profileImage
                }
              : defaultPortfolio.personal);

          const education =
            remote.education &&
            Array.isArray(remote.education) &&
            remote.education.length > 0
              ? remote.education
              : defaultPortfolio.education;

          const skills =
            remote.skillsCategorized ||
            remote.skills ||
            defaultPortfolio.skills;

          const projects =
            remote.projects &&
            Array.isArray(remote.projects) &&
            remote.projects.length > 0
              ? remote.projects
              : defaultPortfolio.projects;

          const achievements =
            remote.achievements ||
            defaultPortfolio.achievements;

          const experience =
            remote.experience ||
            defaultPortfolio.experience;

          const stats =
            remote.stats ||
            defaultPortfolio.stats;

          setData({
            personal,
            education,
            skills,
            projects,
            achievements,
            experience,
            stats
          });
        } else {
          // Keep local/default portfolio data
          setData(defaultPortfolio);
        }

        setLoading(false);
      },
      (error) => {
        console.error(
          "Firestore realtime error:",
          error
        );

        // Keep website working even if Firestore fails
        setData(defaultPortfolio);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        data,
        loading
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () =>
  useContext(PortfolioContext);
