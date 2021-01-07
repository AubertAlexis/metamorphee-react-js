import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../resources/img/logo.png';

const Logo = () => {
    return (
        <div className="top-bar__logo">
            <Link to="/">
                <img src={logo} alt="logo" className="top-bar__logo--img" />
            </Link>
        </div>
    )
}

export default Logo
