import React from 'react'
import {useSelector} from 'react-redux'
import IconBtn from '../../../common/IconBtn';

const RenderTotalAmount = () => {

    const {total } = useSelector((state)=>state.cart);
    const handleBuyNow = ()=>{
        // to Payment gateway
    }
  return (
    <div>
        <p>Total:</p>
        <p>Rs. {total}</p>
        <IconBtn
            text="Buy Now"
            onClick={handleBuyNow}
            customClasses={"w-full justify-center"}
        />
    </div>
  )
}

export default RenderTotalAmount