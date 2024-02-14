import React from "react";

import NewsList from "./NewsList";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-3xl m-10 font-bold">
          News App with Firebase Integration
        </h1>
      </div>
      <NewsList />
    </div>
  );
};

export default Home;
