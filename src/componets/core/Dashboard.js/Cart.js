import React from 'react'
import { useSelector } from 'react-redux';
import RenderCard from './Cart/RenderCard';
import RenderTotalAmount from './Cart/RenderTotalAmount';


const Cart = () => {
    const { totalItems } = useSelector((state) => state.cart);

    return (
        <div>
            <h1>Your Cart</h1>
            <p>{totalItems} Courses in Cart</p>

            {
                totalItems > 0 ?
                    (<div>
                        <RenderCard />
                        <RenderTotalAmount />
                    </div>)
                    : (<p>Your Cart is Empty</p>)
            }

        </div>
    )
}

export default Cart