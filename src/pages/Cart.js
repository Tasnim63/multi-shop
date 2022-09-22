import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';



export default function Cart() {
    const dispatch = useDispatch();
const products =useSelector((state) => state.cart)
const handdleRemove = (productId) => {
   dispatch(remove(productId))
}
  return (
    <div>

     <h3>My cart</h3>
        <div className='cartWrapper'>
        {products.map((product) => (
        <div className="cartCard" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
         <button className='btn' onClick={() => handdleRemove(product.id)}>Remove</button>
        </div>
      ))}
        </div>
    </div>
  )
}
