import React from 'react'

const Input = ({
    type = "text",
    placeholder = false,
    additionalClass = "",
    name = false,
    id = false,
}) => {
    return (
        <input type={type} name={name ? name : ""} placeholder={placeholder} id={id ? id : ""} className={`form-control ${additionalClass}`}/>
    )
}

export default Input
