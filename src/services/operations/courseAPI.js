import { categories } from "../apis";
import {apiConnector} from "../apiconnector";
import {toast} from 'react-hot-toast';

export function getAllCourses() {
	return async (dispatch) => {
		try {
			console.log("Inside get all courses connector")

            const response = await apiConnector("GET", categories.CATEGORIES_API);
			// console.log("Printing sublinks result : ", result.data.allCategory);
			// setSubLinks(result.data.allCategory);
			// console.log("After api connector" , response)

			if (!response.data.success) {
				throw new Error(response.data);
			}

            return response.data.allCategory;
		}
		catch (error) {
			console.log("Login error ", error);
			toast.error(error.response.data.message);
			return [];
		}
	}
}
