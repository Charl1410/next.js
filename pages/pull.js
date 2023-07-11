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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title.rendered}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default pull;
