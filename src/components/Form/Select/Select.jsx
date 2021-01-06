import React from 'react'

const Select = ({
    options,
    parentClass = "",
    childClass, 
    variant = "",
    id = false,
    name = false,
    onChange = false
}) => {
    return (
        <div className={`form-group select ${parentClass} ${variant}`}>
            <select id={id ? id : ""} name={name ? name : ""} onChange={onChange ? onChange : undefined} className={childClass}>
                {options.map((option, key) => {
                    return <option key={key} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select
