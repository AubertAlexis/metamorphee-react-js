import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({click}) => {
    return (
        <nav className={`${click ? 'nav active' : 'nav'}`}>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">navlink 1</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
