import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    children,
    onClick,
    variant = "primary",
    additionalClass = "",
    type = "button",
    isLink = "false",
    path
}) => {
    return (
        isLink === "false" ? (
            <button onClick={onClick} type={type} className={`btn btn-${variant} ${additionalClass}`}>
                {children}
            </button>
        ) : (
            <Link to={path} className={`btn btn-${variant} ${additionalClass}`}>{children}</Link>
        )
    )
}

export default Button
