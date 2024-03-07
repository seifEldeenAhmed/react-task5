import axios from "axios";
export const GET_DETAILS= "GET_DETAILS";

let  ProductDetailsAction = (id)=> async(dispatch) => {
    const {data}=await axios.get(`http://localhost:2000/products/${id}`);
    dispatch({
        type:GET_DETAILS,
        payload:data
    })
}
export default ProductDetailsAction
