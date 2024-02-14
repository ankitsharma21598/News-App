import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Artical from './Artical';
import Loading from '../Loading/page';

const NewsList = () => {
  // State to store news data and loading status
  const [newsdata, setnewsdata] = useState([]);
  const [loading, setloading] = useState(false);

  // Creating an instance of Axios with a base URL
  const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/",
  });

  // Function to fetch news data
  const getnewsdata = () => {
    // Set loading to true before making the request
    setloading(true);
    try {
      // Making a GET request to the specified API
      axiosInstance
        .get(`https://flash-breezy-chime.glitch.me/newsdata`)
        .then((res) => {
          // Update state with the fetched news data
          setnewsdata(res.data);
          // Set loading to false after the data is received
          setloading(false);
        });
    } catch (error) {
      // Log any errors that occur during the request
      console.log(error);
    }
  };

  // useEffect hook to fetch news data when the component mounts
  useEffect(() => {
    getnewsdata();
  }, []);

  // Log the fetched news data to the console
  console.log('news', newsdata);

  return (
    <>
      {/* Header section with a background image */}
      
        {/* Welcome message */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-black mt-20 mb-8">
          Welcome to The News App
        </h1>
     

      {/* Loading indicator while fetching data */}
      {loading && (
        <div className="w-full mt-32">
          <Loading />
        </div>
      )}

      {/* Displaying news articles in a grid */}
      <div className="w-[95%] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {newsdata.map((el) => {
          return <Artical key={el.id} data={el} />;
        })}
      </div>
    </>
  );
};

export default NewsList;
