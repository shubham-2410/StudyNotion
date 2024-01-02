import React from 'react'
import ReactStars from 'react-stars'
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart} from '../../../../redux/slices/cartSlice';

const RenderCard = () => {

    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div>
            {
                cart.map((index, course) => {
                    <div key={index}>
                        <img src={course?.thumbnail} alt='thumbnail' />

                        <div>
                            <p>{course?.courseName}</p>
                            <p>{course?.category?.name}</p>
                            <div>
                                <span>4.8</span>
                                <ReactStars
                                    count={5}
                                    size={20}
                                    edit={false}
                                    activeColor="#ffd700"
                                    emptyIcon={MdOutlineStarBorder}
                                    fullIcon={MdOutlineStar}
                                />
                                <span>{course?.ratingAndReview?.length} Rating</span>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => { dispatch(removeFromCart(course._id)) }}
                            >
                                <RiDeleteBinLine />
                                <span>Span</span>
                            </button>

                            <span>{course?.price}</span>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default RenderCard