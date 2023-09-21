// axios-instance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sera.wpdev3.com/wp-json/wp/v2', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Adjust for production
    // You can add other headers as needed
  },
});

export default instance;
