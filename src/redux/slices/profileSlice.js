import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    user : localStorage.getItem("user")!==("undefined"||null) ? JSON.parse(localStorage.getItem("user")) :null,
    loading: false,
};

const  profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{
        setUser:(state , value)=>{

            // state.user.accountType = value.payload.accountType;
            // state.user.email = value.payload.email;
            // state.user.firstName = value.payload.firstName;
            // state.user.lastName = value.payload.lastName;
            // state.user.token = value.payload.token;
            // state.user.image = value.payload.image;
            state.user = value.payload;
            toast.success("user data updated successfully")
        },
        setLoading:(state, value)=>{
            state.loading= value.payload;
        }
    }
});

export const {setUser , setLoading} = profileSlice.actions;
export default profileSlice.reducer ;