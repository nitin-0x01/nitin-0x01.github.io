import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export interface ProjectItem {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  tags?: string[];
  imageUrl?: string;
}

export interface PortfolioData {
  fullName: string;
  tagline: string;
  bio: string;
  avatarUrl?: string;
  skills: string[];
  projects: ProjectItem[];
}

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "portfolio_data", "main"), (docSnap) => {
      if (docSnap.exists()) {
        setPortfolio(docSnap.data() as PortfolioData);
      }
      setLoading(false);
    }, (err) => {
      console.error("Firestore Listen Error:", err);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { portfolio, loading };
}
