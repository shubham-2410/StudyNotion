import React, { useEffect, useState } from 'react';

const ThumbnailInput = ({ name, label, register, errors, setValue }) => {
  const [isPicked, setIsPicked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    register(name, {
      required: true,
    });
  }, [name, register]);

  useEffect(() => {
    setValue(name, selectedFile);
  }, [name, selectedFile, setValue]);

  const handleCancel = () => {
    setSelectedFile(null);
    setIsPicked(false);
    // Clear input value
    const input = document.getElementById(name);
    if (input) input.value = '';
  };

  const handleSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setIsPicked(true);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      {
        !isPicked ?
        <input
          type="file"
          id={name}
          onChange={handleSelect}
        />
        :<img
          src={URL.createObjectURL(selectedFile)}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '100px' }}
        />
      }

      {isPicked && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default ThumbnailInput;
