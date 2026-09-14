import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

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

export interface FirestorePortfolioData {
  fullName?: string;
  tagline?: string;
  bio?: string;
  avatarUrl?: string;
  skills?: string[];
  projects?: Array<{
    title: string;
    description: string;
    liveLink?: string;
    githubLink?: string;
    tags?: string[];
    image?: string;
  }>;
}

interface PortfolioContextType {
  data: FirestorePortfolioData | null;
  loading: boolean;
}

const PortfolioContext = createContext<PortfolioContextType>({ data: null, loading: true });

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<FirestorePortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "portfolio_data", "main"), (docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data() as FirestorePortfolioData);
      }
      setLoading(false);
    }, (err) => {
      console.error("Firestore realtime error:", err);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
