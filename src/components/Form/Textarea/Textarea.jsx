import React from 'react'

const Textarea = ({
    resize = "",
    placeholder = false,
    additionalClass = "",
    name = false,
    id = false,
}) => {
    return (
        <textarea name={name ? name : ""} placeholder={placeholder} id={id ? id : ""} className={`form-control ${additionalClass && additionalClass} ${resize && "resize"}`}></textarea>
    )
} 

export default Textarea
