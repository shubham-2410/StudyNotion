
const BASE_URL = process.env.REACT_APP_BASE_URL

export const categories = {
    CATEGORIES_API :BASE_URL + "/course/showAllCategories",
}

// auth endpoints
export const  endPoints = {
    SENT_OTP : BASE_URL +"/auth/sentotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login",
    RESETPASSTOKEN_API :BASE_URL +"/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// profile endpoint
export const profileEndpoint={
    UPDATE_PASS : BASE_URL + "/auth/changepassword",
    UPDATE_PROFILE : BASE_URL + "/profile/updateProfile",
    DELETE_PROFILE : BASE_URL + "/profile/deleteProfile",
    GET_ENROLLED_COURSES_API : BASE_URL + "/profile/getEnrolledCourses"
}