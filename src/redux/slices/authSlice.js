import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    signupData:{accountType:"" ,firstName:"" , lastName:"" , email:"" , password:"" , confirmPassword:""},
    loading:false,
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) :null
};

const  authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setToken(state , action){
            state.token = action.payload;
        },
        setLoading(state , value){
            state.loading = value.payload;
            console.log("loading ..." , state.loading)
        },
        setSignupData(state , value){
            state.signupData.accountType = value.payload.accountType;
            state.signupData.password = value.payload.password;
            state.signupData.confirmPassword = value.payload.confirmPassword;
            state.signupData.email = value.payload.email;
            state.signupData.firstName = value.payload.firstName;
            state.signupData.lastName = value.payload.lastName;
            toast.success("SignUp data updated successfully")
        },
    }
});

export const {setToken , setLoading , setSignupData} = authSlice.actions;
export default authSlice.reducer ;