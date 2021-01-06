import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

import burger from '../../resources/img/icons/burger.svg';
import close from '../../resources/img/icons/close.svg';

const HeaderContent = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="header__content">
            <div className="container">
                <div className="header__top-bar">
                    <Link to="/">
                        <h2 className="h1-style">ReactJs Starter</h2>
                    </Link>

                    <div className="nav-mobile" onClick={handleClick}>
                        {click === false ?
                            <img className="nav-mobile__icon nav-mobile__open" src={burger} alt="burger"/>
                        :
                            <img className="nav-mobile__icon nav-mobile__close" src={close} alt="close"/>
                        }
                    </div>
                </div>
                <div className="header__nav">
                    <Nav click={click}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent
