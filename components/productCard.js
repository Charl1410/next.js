import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../styles/productCard.module.css'
import Button from "../components/button";
import Banner from "./Banner";


const ProductList = () => {
  //storing the page name to pass as prop to banner
  const functionName = "Products";
  const buttonName = "View product"
  // State to store the product data and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetching the data using axios
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(
           "https://nextjs.jasons288.sg-host.com/wp-json/wp/v2/product"
         );
         setProducts(response.data);
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
    <div className={styles.cardContainer}>
      <Banner pageName={functionName}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <div className={styles.card}>
              <h1 key={product.id}>
                <h3>{product.title.rendered}</h3>
              </h1>

              <img src={product._links.href} alt={product.title.rendered} />

              <p>{product.content.rendered}</p>
              <Button buttonName={buttonName} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
