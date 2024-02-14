// components/FavoritePage.js
import React from 'react';
import { useNewsContext } from '../context/NewsContext';
import NewsItem from '../components/NewsItem';
import FavoriteItem from '../components/FavoriteItem';

function FavoritePage() {
  const { news, favorites } = useNewsContext();

  const favoriteNews = news.filter((article) => favorites.includes(article.id));

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Favorite News</h1>
      {favoriteNews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteNews.map((article) => (
            <FavoriteItem
              key={article.id}
              article={article}
              isFavorite
            />
          ))}
        </div>
      ) : (
        <p>No favorite news articles yet.</p>
      )}
    </div>
  );
}

export default FavoritePage;
