// components/NewsItem.js
import React from "react";
import { Link } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

function NewsItem({ article }) {
  // const { dispatch } = useNewsContext();
  const { addToFavorites, removeFromFavorites,favorites } = useNewsContext();
  const isFavorite = favorites.includes(article.id);
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(article.id);
    } else {
      addToFavorites(article.id);
    }
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
        onClick={handleToggleFavorite}
        className={`mt-2 block ${isFavorite ? 'text-red-500' : 'text-blue-500'}`}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favoritess'}
      </button>
      <Link to={`/news/${article.id}`} className="text-blue-500 mt-2 block">
        Read More
      </Link>
    </div>
  );
}

export default NewsItem;
