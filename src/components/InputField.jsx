import React from 'react'

const InputField = ({handleChange, name, title, value}) => {
  return (
    <label className='sidebar-label-container'>
        <input 
            type="radio" 
            name={name} 
            value={value}
            onChange={handleChange}
        />
        <span className='checkmark'></span>{title}
    </label>
  )
}

export default InputField