import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { add } from "../store/cartSlice";
import { STATUSES } from "../store/productSlice";
import {fetchProducts} from '../store/productSlice';
export default function Products() {
    const  dispatch =useDispatch()
    const  {data: products ,status} =useSelector((state) => state.product)
//   const [products, setProducts] = useState([]);
  useEffect(() => {
   dispatch(fetchProducts())



    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);
  const handdleAdd = (product) =>{
    // 
dispatch(add(product))
  }



  if(status === STATUSES.LOADING) {
    return<h2>loading...</h2>
  }
  if(status === STATUSES.ERROR){
    return<h2>something went wrong!</h2>
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handdleAdd(product)} className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
}
