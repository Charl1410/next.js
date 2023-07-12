import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <h1>{formatDate(post.date)}</h1>
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
