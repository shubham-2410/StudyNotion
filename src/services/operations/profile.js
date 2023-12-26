import toast from 'react-hot-toast';
import { setUser } from "../../redux/slices/profileSlice";
import { logout } from './authAPI';
const { profileEndpoint } = require("../apis");
const {apiConnector} = require('../apiconnector')


const {
    UPDATE_PROFILE,
    DELETE_PROFILE,
    UPDATE_PASS,
    GET_ENROLLED_COURSES_API,
} = profileEndpoint;



export function updateProfile(dob, gender, contactNumber, about , navigate) {
    // gender="", dateOfBirth = "", about = "", contactNumber="" 
    console.log("dob ", gender , dob , contactNumber , about)
    return async (dispatch) => {
        const toastId = toast.loading("Loading");
        try {
            const dateOfBirth = dob;
            const response = await apiConnector("PUT", UPDATE_PROFILE, { gender, dateOfBirth, about, contactNumber });

            console.log("After api connector", response)
            

            if (!response.data.success) {
                throw new Error(response.data);
            }
            dispatch(setUser({ ...response.data.newUser }));
			localStorage.setItem("user", JSON.stringify(response.data.newUser));

            toast.success("Profile Info Updated Successfull");
            navigate('/dashboard/my-profile');
        }
        catch (error) {
            console.log("Profile Info Update Error", error);
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId);
    }
}

export function updatePassword(email , password , newPassword, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading");
        try {
            const response = await apiConnector("PUT", UPDATE_PASS, { email , newPassword , oldPassword:password});

            console.log("After api connector", response)
            

            if (!response.data.success) {
                throw new Error(response.data);
            }

            toast.success("Password Updated Successfull");
            navigate('/dashboard/my-profile');
        }
        catch (error) {
            console.log("Password Update Error", error);
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId);
    }
}

export function deleteAccount( navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading");
        try {
            const response = await apiConnector("Delete", DELETE_PROFILE);

            console.log("After api connector", response)
            

            if (!response.data.success) {
                throw new Error(response.data);
            }

            dispatch(logout(navigate));
            toast.success("Account Deleted");
        }
        catch (error) {
            console.log("Account Deletion Error", error);
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId);
    }
}

export function getEnrolledCourses() {
    return async (dispatch) => {
        const toastId = toast.loading("Loading");
        try {
            const response = await apiConnector("GET", GET_ENROLLED_COURSES_API);

            console.log("After api connector", response)
            
            if (!response.data.success) {
                throw new Error(response.data);
            }
            toast.success("Courses Details Fetched");
        }
        catch (error) {
            console.log("Courses Details fetch Error", error);
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId);
    }
}