// context/NewsContext.js
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { auth, db } from '../firebase'; // Assuming you have a Firebase configuration in a separate file
import { onAuthStateChanged } from "firebase/auth";

// Create context
const NewsContext = createContext();

// Create context provider component
export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  
  const fetchAllNews = async () => {
    try {
      const response = await axios.get(
        "https://news-data-tjd2.onrender.com/articles"
      );
      // Assuming the response structure includes an 'articles' array

      const newsWithIds = response.data.map((article, index) => ({
        ...article,
        id: index + 1,
      }));

      setNews(newsWithIds);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const fetchNewsByID = async (id) => {
    try {
      const articleData = news.find((article) => article.id === Number(id));

      setArticle(articleData);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  const addToFavorites = async (id) => {
    try {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        await setDoc(userDoc, { favorites: arrayUnion(id) }, { merge: true });
        setFavorites((prevFavorites) => [...prevFavorites, id]);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFavorites = async (id) => {
    try {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        await setDoc(userDoc, { favorites: arrayRemove(id) }, { merge: true });
        setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  useEffect( () => {
    // Assuming you have a Firebase authentication state listener
    // to set the user when authenticated
    const unsubscribe = onAuthStateChanged(auth,async (user) => {
      setUser(user);
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);
        const userFavorites = userSnapshot.data()?.favorites || [];
        setFavorites(userFavorites);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchAllNews();
  }, []);
  

  return (
    <NewsContext.Provider
      value={{
        fetchAllNews,
        fetchNewsByID,
        news,
        article,
        addToFavorites,
        removeFromFavorites,
        favorites,
        user 
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook to use the context
export const useNewsContext = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }

  return context;
};
