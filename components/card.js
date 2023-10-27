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
  //the function will run on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fl1digital.com/wp-json/wp/v2/posts"
        );
        //data state is now set to the API data 
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //this console logs the data every time the data changes
 useEffect(() => {
   if (data) {
     console.log(data[0].yoast_head_json.og_image[0].url);
     const imageURLS = data[0].yoast_head_json.og_image[0].url;
    console.log('image urls:' + imageURLS);
   } else {
     console.log("data not found: null");
   }
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
              <div className={styles.imageContainer}>
                {post.yoast_head_json &&
                post.yoast_head_json.og_image &&
                post.yoast_head_json.og_image[0] ? (
                  <img
                    className={styles.cardImage}
                    src={post.yoast_head_json.og_image[0].url}
                    alt="Post Image"
                  />
                ) : (
                  <div>No Image Available</div>
                )}{" "}
              </div>
              <div className={styles.cardText}>
                <h1> {post.title.rendered}</h1>
                <h3>{formatDate(post.date)}</h3>
                {post.excerpt.rendered}
                <Button buttonName={buttonName} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
