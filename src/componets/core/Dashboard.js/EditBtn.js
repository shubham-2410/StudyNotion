import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const EditBtn = () => {
	const navigate = useNavigate();
	return (
		<div>
			<button onClick={()=>{navigate('/dashboard/settings') }}
			className='flex justify-center items-center py-1 px-4 bg-yellow-50 text-black rounded-md gap-2 text-lg font-medium'>
				Edit
				<FiEdit />
			</button>
		</div>
	)
}

export default EditBtn