import { GET_CART } from "../Actions/CartAction";
import { GET_DETAILS } from "../Actions/ProductDetailsAction";
import { GET_PRODUCTS } from "../Actions/ProductsAction";

const INITIAL_STATE={
    list:[],
    count:0,
    product:{}
};

export default function ProductsReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                list:action.payload
            }
        case GET_CART:
            return {
                ...state,
                count:state.count+1
            }
        
        case GET_DETAILS:
            return{
                ...state,
                product:action.payload
            }
        default:
            return state
    }
}
