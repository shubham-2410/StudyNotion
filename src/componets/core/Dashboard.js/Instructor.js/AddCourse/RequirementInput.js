import React, { useEffect, useState } from 'react'

const RequirementInput = ({ name, label, getValues, setValue, errors, register }) => {

    const [requirement, setRequirement] = useState("");
    const [requirementList, setRequirementList] = useState([]);

    useEffect(() => {
        register(name, {
            required: true,
        })
    }, [])

    useEffect(() => {
        setValue(name, requirementList);
    }, [requirementList]);


    const handelAdd = () => {
        if (requirement) {
            setRequirementList([...requirementList, requirement]);
            setRequirement("");
        }
    }

    const handelRemove = (index) => {
        const updatedList = [...requirementList]
        updatedList.splice(index, 1);
        setRequirementList(updatedList);
    }
    return (
        <div>

            <label htmlFor={name} > {label}</label>
            <input
                id={name}
                value={requirement}
                onChange={(e) => { setRequirement(e.target.value) }}
                placeholder='Enter your requirement/instruction'
                className='w-full text-richblack-500'
            />
            <button
                className=' font-semibold text-yellow-200'
                type='button'
                onClick={() => { handelAdd() }}
            >
                Add
            </button>

            {errors.name && <span>Enter Requirements / Instructions **</span>}

            {
                requirementList.length > 0 &&
                <ul>
                    {
                        requirementList.map((item, index) =>
                            <li key={index}
                                className='flex gap-3 items-center text-richblack-25'
                            >
                                <span>{item}</span>

                                <button
                                    type='button' onClick={() => { handelRemove(index) }}
                                    className=' text-xs text-pure-greys-300'
                                >clear</button>
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default RequirementInput