import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styles from "./Products.module.css"
// import ProductList from "./ProductList";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function fetchdata(){
      try {
        let res = await axios.get(" http://localhost:8080/products");
        setDetails(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchdata()
  })
  return (
    <div className={styles.main}>
      {details.map((el) => {
        return (
          <div key={el.id} className={styles.box}>
            <h1>{el.title}</h1>
            <img src={el.imageSrc} alt="" />
            <h3>Price: ${el.price}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default Products;
