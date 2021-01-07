import React from 'react'

const InputGroup = ({
    type = "text",
    placeholder = false,
    label = placeholder,
    additionalClass = "",
    parentClass = "",
    labelClass = "",
    name = false,
    id = false,
}) => {
    return (
        <div className={`form-group ${parentClass}`}>
            <label className={`${labelClass}`} htmlFor={id ? id : ""}>{label}</label>
            <input type={type} name={name ? name : ""} placeholder={placeholder ? placeholder : ""} id={id ? id : ""} className={`form-control ${additionalClass}`}/>
        </div>
    )
}

export default InputGroup
