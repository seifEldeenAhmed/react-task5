import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ProductDetailsAction from '../Actions/ProductDetailsAction'
import GetCart from '../Actions/CartAction'

export const Product = () => {
    const {id} =useParams();

    let prd = useSelector(state => state.Products.product);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ProductDetailsAction(id))
    },[])
    
    const dispatcher = () => {
        dispatch(GetCart());
    }
  return (
    <>
    <div>
        <h1>Product Details</h1>
        <div className='row justify-content-center'>

        <div className="card col-6" >
            <img src={prd.image} className="card-img-top" alt="..." width="300px" height="300px" />
            <div className="card-body">
                <h5 className="card-title">{prd.title}</h5>
                <p className="card-text">{prd.description}</p>
                <Link to="/" className="btn btn-dark">Go to Products</Link>
                <button onClick={dispatcher} className="btn mx-2 btn-dark">Add to cart</button>

            </div>
        </div>
        </div>
    </div>
</>
  )
}
