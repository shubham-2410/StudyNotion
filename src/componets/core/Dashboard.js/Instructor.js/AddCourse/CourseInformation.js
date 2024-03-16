import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addCourse, getAllCourses } from '../../../../../services/operations/courseAPI';
import RequirementInput from './RequirementInput';
import {setStep} from '../../../../../redux/slices/courseSlice'
import TagsInput from './TagsInput';
import ThumbnailInput from './ThumbnailInput';

const CourseInformation = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const { course, editCourse } = useSelector((state) => state.course);

    const [loading, setLoading] = useState(false);
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                const category = await dispatch(getAllCourses());
                console.log("i am cat", category);
                setCourseCategories(category);
                setLoading(false);
            } catch (error) {
                toast.error('Error while fetching course categories');
            }
        };

        fetchCourses();

        if (editCourse) {
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("coursePrice", course.price);
            setValue("courseTags", course.tags);
            setValue("courseBenefits", course.whatYouWillLearn);
            setValue("courseCategory", course.category);
            setValue("courseRequirements", course.instructions);
            setValue("courseImage", course.thumbnail);
        }

    }, [dispatch, editCourse, setValue]);

    const onSubmit = async (data) => {
        // e.preventDefault();
        console.log("form data is" , data);

        const response = dispatch(addCourse(data));

    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=' rounded-3xl bg-richblack-800 border  border-richblue-700 space-y-8 p-6'>

                <div>
                    <label htmlFor='courseTitle'>Course Title <sup>*</sup></label>
                    <input
                        id='courseTitle'
                        placeholder='Enter course title'
                        {...register("courseTitle", { required: true })}
                        className='w-full text-richblack-400 bg-richblack-700 rounded-md text-lg'
                    />
                    {errors.courseTitle && (
                        <span>Course Title is Required **</span>
                    )}
                </div>

                <div>
                    <label htmlFor='courseShortDesc'>Course Description<sup>*</sup></label>
                    <textarea
                        id='courseShortDesc'
                        placeholder='Enter Description'
                        {...register("courseShortDesc", { required: true })}
                        className='w-full min-h-[140px] text-richblack-400 bg-richblack-700 rounded-md text-lg'
                    />
                    {errors.courseShortDesc && (
                        <span>Course Description is Required **</span>
                    )}
                </div>

                <div>
                    <label htmlFor='coursePrice'>Course Price <sup>*</sup></label>
                    <input
                        id='coursePrice'
                        placeholder='   Enter course price'
                        {...register("coursePrice", { required: true , valueAsNumber:true})}
                        className='w-full text-richblack-400 bg-richblack-700 rounded-md text-lg'
                    />
                    {errors.courseTitle && (
                        <span>Course Price is Required **</span>
                    )}
                </div>

                <div>
                    <label htmlFor='courseCategory'>Course Category <sup>*</sup></label>

                    <select
                        id='courseCategory'
                        defaultValue={""}
                        {...register("courseCategory", {required:true})}
                        className='w-full text-richblack-400 bg-richblack-700 rounded-md text-lg'
                    >
                        <option value="" disabled className=' text-richblack-400 bg-richblack-700 rounded-md text-lg'>Choose a category</option>
                        {
                            !loading && 
                            courseCategories.map((cat )=>(
                                <option value={cat.name} key={cat._id} >{cat.name}</option>
                            ))
                        }

                    </select>
                    {errors.courseCategory && (
                        <span>Course category is Required **</span>
                    )}
                </div>


                {/* tags */}
                <TagsInput
                    name={"courseTags"}
                    label={'Tags'}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                />

                <ThumbnailInput
                    name={"courseImage"}
                    label={'Course Thumbnail'}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                />

                <div>
                    <label htmlFor='courseBenefits'>Course Benifits<sup>*</sup></label>
                    <textarea
                        id='courseBenefits'
                        placeholder='Enter Benifits'
                        {...register("courseBenefits", { required: true })}
                        className='w-full min-h-[130px] text-richblack-400 bg-richblack-700 rounded-md text-lg'
                    />
                    {errors.courseShortDesc && (
                        <span>Course Benifits are Required **</span>
                    )}
                </div>

                <RequirementInput 
                    name="courseRequirements"
                    label="Requirements/Instructions"
                    getValues={getValues}
                    setValue={setValue}
                    errors={errors}
                    register={register}
                />

                <div 
                    className=''
                >
                    {
                        editCourse &&
                        <button
                            onClick={()=>dispatch(setStep(2))}
                            className=' bg-richblue-300 flex items-center'
                        >
                            Continue without Saving
                        </button>
                    }

                    <button className=' bg-yellow-100 px-4 py-2 rounded-md'>
                        {
                            !editCourse ? 'Next' :'Save Changes'
                        }
                    </button>
                    
                </div>

            </form>
        </>
    )
}

export default CourseInformation;
