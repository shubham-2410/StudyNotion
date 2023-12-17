import toast from "react-hot-toast";
import { setLoading, setToken } from "../../redux/slices/authSlice"
import { apiConnector } from "../apiconnector";
import { endPoints } from "../apis"
import { setUser } from "../../redux/slices/profileSlice";
import { setLoading as profileLoading } from "../../redux/slices/profileSlice";

const {
	SENT_OTP,
	SIGNUP_API,
	LOGIN_API,
	RESETPASSTOKEN_API,
	RESETPASSWORD_API,
} = endPoints;


export function login(email, password, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading");
		dispatch(profileLoading(true));

		try {
			console.log("Inside login connector")
			const response = await apiConnector("POST", LOGIN_API, { email, password });

			console.log("After api connector" , response)

			if (!response.data.success) {
				throw new Error(response.data);
			}

			dispatch(setToken(response.data.user.token));
			dispatch(setUser({ ...response.data.user }));

			localStorage.setItem("user", JSON.stringify(response.data.user));
			localStorage.setItem("token" , JSON.stringify(response.data.user.token));

			toast.success("Login Successfull");
			navigate('/dashboard/my-profile');
		}
		catch (error) {
			console.log("Login error ", error);
			toast.error(error.response.data.message);
		}

		dispatch(profileLoading(false));
		toast.dismiss(toastId);

	}
}

export function signUp(firstName, lastName, email, password, confirmPassword, accountType, otp, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading")
		dispatch(setLoading(true));

		try {
			console.log("i am herer :", password, confirmPassword);
			const response = await apiConnector("POST", SIGNUP_API, {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				accountType,
				otp,
			});

			if (!response.data.success) {
				throw new Error(response.data.message);
			}
			toast.success("SignUp Successfull");
			navigate('/login');
		}
		catch (error) {
			console.log("Error in signup...", error);
			toast.error(error.response.data.message);

		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	}
}

export function logout(navigate) {
	return (dispatch) => {
		dispatch(setLoading(null))
		dispatch(setUser(null))
		// dispatch(resetCart())
		dispatch(setToken(null))
		localStorage.removeItem("token")
		localStorage.removeItem("user")
		toast.success("Logged Out")
		navigate("/")
	}
}

export function sentOtp(email, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading("loading");
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", SENT_OTP, { email, checkUserPresent: true });
			console.log("Sent otp response...", response);
			if (!response.data.success) {
				throw new Error(response.data.message);
			}
			toast.success("Otp Send Successfully");
			navigate('/verify-email')
		}
		catch (error) {
			console.log('Error in sending otp ', error);
			toast.error(error.response.data.message);
		}
		dispatch(setLoading(false))
		console.log("after false")
		toast.dismiss(toastId);
	}
}

export function getPasswordResetToken(email, setEmailSend) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", RESETPASSTOKEN_API, { email })
			console.log("reset password token response...", response)

			if (!response.data.success) {
				throw new Error(response.data.message)
			}

			toast.success("Reset Email Sent");

			setEmailSend(true);
		}
		catch (error) {
			console.log("Reset password token error")
			toast.error("Failed to sent email")
		}
		dispatch(setLoading(false))
	}
}

export function resetPassword(password, confirmPassword, token, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", RESETPASSWORD_API, { password, confirmPassword, token });
			console.log("reset password response ...", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("Password Updated Successfully")
			navigate('/login')
		}
		catch (error) {
			console.log("Unable to reset password", error);
			toast.error(error.response.data.message)
		}

		dispatch(setLoading(false));
	}
}
