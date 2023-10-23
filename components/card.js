import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/cards.module.css";
import Button from './Button'

const Card = () => {
  const buttonName = "Read more"
  
  //storing the data whether page is loading and errors in state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //fetching the data using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fl1digital.com/wp-json/wp/v2/posts"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  //function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  

  //this maps all the titles pulled from the API call in a routed page called pull js
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className={styles.container}>
          {/* mapping the post data */}
          {data.map((post) => (
            <div className={styles.card} key={post.id}>
              {/* <img src={post.yoast_head_json.og_image} alt={post.title.rendered} /> */}
              <div className={styles.center}>
                <h1> {post.title.rendered}</h1>
                <h3>{formatDate(post.date)}</h3>
                {post.excerpt.rendered}
                <Button buttonName={buttonName}/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
