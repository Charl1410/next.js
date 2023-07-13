import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from '../styles/cards.module.css'



const pull = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fl1digital.com/wp-json/wp/v2/posts"
        );
        setData(response.data);
        console.log(data)
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

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
  

  //this maps all the titles pulled from the API call
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div class={styles.container}>
          {data.map((post) => (
            <div class={styles.card}key={post.id}>
              {post.yoast_head_json.og_image.map((image) => (
                <div key={image.url}>
                  <img src={image.url} alt="Post Image" />
                </div>
              ))}
              <h2>{formatDate(post.date)}</h2>
              {post.excerpt.rendered}
              {post.title.rendered}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default pull;
