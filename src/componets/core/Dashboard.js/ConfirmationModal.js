import React from 'react';
import IconBtn from '../../common/IconBtn';

const ConfirmationModal = ({ modalData }) => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-richblack-700 bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg  bg-richblack-800">
                <div className="text-center text-gray-200 mb-5">
                    <div className="text-lg font-bold m-2">{modalData.text1}</div>
                    <p>{modalData.text2}</p>
                </div>
                <div className="flex justify-center gap-5">
                    <IconBtn
                        onClick={modalData?.btn1Handler}
                        text={modalData?.btn1Text}
                        className="mr-4 bg-yellow-400 text-gray-800 hover:bg-yellow-500 hover:text-gray-800 focus:outline-none"
                    />
                    <button onClick={modalData?.btn2Handler} className="px-4 py-2 rounded-md bg-yellow-400 text-gray-800 hover:bg-yellow-500 hover:text-gray-800 focus:outline-none">
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
