// components/FavoriteItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext';

function FavoriteItem({ article,isFavorite }) {
  const { removeFromFavorites } = useNewsContext();

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(article.id);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src={article.urlToImage}
        alt="Front of men&#039;s Basic Tee in black."
        class="object-cover object-center"
      />

      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600">{article.description}</p>
      <button
        onClick={handleRemoveFromFavorites}
        className={`mt-2 block text-red-500`}
      >
        Remove from Favorites
      </button>
      <Link to={`/news/${article.id}`} className="text-blue-500 mt-2 block">
        Read More
      </Link>
    </div>
  );
}

export default FavoriteItem;
