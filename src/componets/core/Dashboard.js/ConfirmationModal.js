import React from 'react'
import IconBtn from '../../common/IconBtn'

const ConfirmationModal = ({ modalData }) => {
    return (
        <div>
            <div>
                <div>
                    {modalData.text1}
                </div>
                <p>
                    {modalData.text2}
                </p>
                <div className='flex '>
                    <IconBtn
                        onClick={modalData?.btn1Handler}
                        text={modalData?.btn1Text}
                    />
                    <button onClick={modalData?.btn2Handler}>
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal