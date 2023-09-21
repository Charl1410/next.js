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
        const response = await axiosInstance.get("/product");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
