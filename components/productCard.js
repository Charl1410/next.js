import React, { useState, useEffect } from "react";
import axiosInstance from "../axios-instance";

const ProductList = () => {
  // State to store the product data and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetching the data using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sera.wpdev3.com/wp-json/wp/v2/product"
        );
        setProducts(response.data);
        console.log('hello')
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

   useEffect(() => {
     console.log(products);
   }, [products]);

  // Render the product list
  return (
    <div>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title.rendered}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
