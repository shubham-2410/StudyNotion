import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const TagsInput = ({ name, label, register, errors, setValue }) => {
    const [tagList, setTagsList] = useState([]);
    const [tag, setTag] = useState("");

    useEffect(() => {
        register(name, {
            required: true,
        });
    }, []);

    useEffect(() => {
        setValue(name, tagList);
    }, [tagList]);

    const handleKey = (e) => {
        if (e.key === ',') {
            e.preventDefault();
            setTagsList([...tagList, tag]);
            setTag("");
        }
    };

    const handleCross = (index) => {
        const newTagList = tagList.filter((_, i) => i !== index);
        setTagsList(newTagList);
    };

    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={name}>{label}</label>
            {tagList.length > 0 && (
                <div className='flex gap-2'>
                    {tagList.map((item, index) => (
                        <p className='text-richblack-50 bg-yellow-400 rounded-full text-base flex gap-1 w-fit justify-center items-center px-1' key={index}>
                            {item} <span className=' cursor-pointer' onClick={() => handleCross(index)}><RxCross2 /></span>
                        </p>
                    ))}
                </div>
            )}
            <input
                type='text'
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={handleKey}
                id={name}
                className='w-full text-richblack-400 bg-richblack-700 rounded-md text-lg'
                placeholder='Press Comma key to add tag '
            />
            {errors && errors[name] && <span>Tags are required **</span>}
        </div>
    );
};

export default TagsInput;
