// components/NewsDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext';

function NewsDetail() {
  const { id } = useParams();
  const { fetchNewsByID, article } = useNewsContext();

  useEffect(() => {
    fetchNewsByID(id);
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // You might want to display a loading indicator
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600">{article.description}</p>
      <img src={article.urlToImage} alt={article.title} className="my-4 max-w-full h-auto" />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">
        Read Full Article
      </a>
    </div>
  );
}

export default NewsDetail;
