import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GetProducts from '../Actions/ProductsAction';
import GetCart from '../Actions/CartAction';
import { Link } from 'react-router-dom';

export const Products = () => {
    let prds = useSelector(state => state.Products.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProducts())
    }, []);
    

    // const dispatch1 = useDispatch();

    const dispatcher = () => {
        dispatch(GetCart());
    }

    return (
        <div>
            <h1>
                Products List
            </h1>


            <div className="row">
                {
                    prds ? (prds.map((p) => {
                        return (
                            <div key={p.id} className="col-12 col-md-4 border border-secondary">
                                <img src={p.image} height={300} width={300} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.description}</p>
                                    <span><small>{p.price}</small></span>
                                    <div className='mt-4'>
                                        <button onClick={dispatcher} className="btn mx-2 btn-dark">Add to cart</button>
                                        <Link to={`products/${p.id}`} ><button className="btn mx-2 btn-dark">Show Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (<div>Loading</div>)
                }
            </div>

        </div>
    )
}
