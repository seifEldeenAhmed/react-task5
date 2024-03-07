import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

let GetProducts = ()=>(dispatch)=>{
    axios.get('http://localhost:2000/products')
    .then(res=>dispatch({
        type:GET_PRODUCTS,
        payload:res.data
    }))
    .catch(err=>console.log(err.message))
}


export default GetProducts