import { categories } from "../apis";
import { apiConnector } from "../apiconnector";
import { toast } from 'react-hot-toast';
import { setEntireCourseData } from "../../redux/slices/viewCourseSlice";

export function getAllCourses() {
	return async () => {
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
			toast.error(error.response.data.message);
			return [];
		}
	}
}

export function addCourse(data) {
	return async () => {

		const toastId = toast.loading("Loading");
		try {

			const formData = new FormData();
			formData.append('name', data.courseTitle);
			formData.append('description', data.courseShortDesc);
			formData.append('whatwillyoulearn', data.courseBenefits);
			formData.append('price', data.coursePrice);
			formData.append('category', data.courseCategory);
			formData.append('tag', data.courseTags);
			formData.append('thumbnail', data.courseImage);

			console.log("Inside add course connector", data);

			const headers ={
				'Content-Type': 'multipart/form-data',
				authorization:JSON.parse(localStorage.getItem('token'))
			}
			const response = await apiConnector("POST", categories.ADD_COURSE_API, formData , headers);

			console.log(response);
		}
		catch (err) {
			console.log("error while api add ", err);
		}

		toast.dismiss(toastId);
	}
}


export function getAllCoursesDetailsByInstructor() {
	const token = JSON.parse(localStorage.getItem('token'));
	return async (dispatch) => {

		const toastId = toast.loading('loading...')
		try {
			
			const headers = {
				authorization : `Bearer ${token}`
			}
			console.log("Inside get all courses details connector" , headers)
			const response = await apiConnector("GET", categories.INSTRUCTOR_ALL_COURSES_DETAILS_API , null , headers );
			await dispatch(setEntireCourseData(response.data.allCourses));

			if (!response.data.success) {
				throw new Error(response.data);
			}

			return response.data.allCourses;
		}
		catch (error) {
			console.log("Error for  ", error);
			toast.error(error.response.data.message);
			return [];
		}
		finally{
			toast.dismiss(toastId);
		}
	}
}