import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method , url , bodyData , headers , params)=>{
    console.log("Bhai apiConnector mai aa gaya hai tu")

    console.log(method , url , bodyData)
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
        withCredentials: true,
    });
}