import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import { Toast } from "react-hot-toast";

const initialState = {
    cart : localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")) : [],
    total : localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("total")) : 0,
    totalItems : localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")) : 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        setTotalItems:(state , action)=>{
            state.totalItems = action.payload;
        },        
        addToCart:(state , action)=>{
            const course = action.payload;
            const index = state.cart.findIndex((item)=>item._id === course._id)

            if(index>=0){
                toast.error("Course already in cart")
                return
            }

            state.cart.push(course)
            state.totalItems++;
        }
    }
});

export const {setTotalItems} = cartSlice.actions;
export default cartSlice.reducer ;