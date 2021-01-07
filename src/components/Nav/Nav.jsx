import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import burger from '../../resources/img/icon/menu.svg';
import close from '../../resources/img/icon/close.svg';

import data from '../../data/navData'

const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="top-bar__nav nav">

            {click === false ?
                <div className="top-bar__nav-burger open-nav" onClick={handleClick}>
                    <img className="top-bar__nav-burger--burger" src={burger} alt="open-nav" />
                </div>
            :
                <div className={`top-bar__nav-close close-nav ${click && 'open'}`} onClick={handleClick}>
                    <img className="top-bar__nav-close--close" src={close} alt="close-nav" />
                </div>
            }

            <ul className={`${click ? 'nav-content open' : 'nav-content'}`}>
                {
                    data.map((navLink, key) => {
                        return <li key={key} className="nav-item">
                            {
                                !navLink.anchor 
                                ? <Link className="nav-link" to={navLink.link}>{navLink.title}</Link>
                                : <HashLink smooth className="nav-link anchor" to={navLink.link}>{navLink.title}</HashLink>
                            }
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav
