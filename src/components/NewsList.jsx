// components/NewsList.js
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { useNewsContext } from "../context/NewsContext";

function NewsList() {
  //   const { state } = useNewsContext();
  const { fetchAllNews, news } = useNewsContext();

  useEffect(() => {
    console.log("Fetching news");
    fetchAllNews();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  if (!news.length) {
    return <div>Loading...</div>; // You might want to display a loading indicator
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((article) => (
        <NewsItem
          key={article.id}
          article={article}
          news={news}
        />
      ))}
    </div>
  );
}

export default NewsList;

