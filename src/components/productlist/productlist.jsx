import OneProduct from "../oneProduct/OneProduct";
import productservices from "../../services/prodductService";
import Search from "../search/search";

import styles from './productlist.module.css'

import { useState, useEffect } from "react";

function ProductList() {

    const [products, setProducts] = useState([]) // funcion that gets the response from fetch and saves it in a json response

    const getProducts = () => {
        productservices().then((res)=>{
            setProducts(res)
        })
    }

    useEffect(()=>{
        getProducts();
    }, []) // [] means only load once at the start as this tells it when to load

    console.log(products)

    return (
      <div className={styles.ProductList}>
        <Search/>
        <OneProduct items={products}/>
      </div>
    );
  }
  
  export default ProductList;