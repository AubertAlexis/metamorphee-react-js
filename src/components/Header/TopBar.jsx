import React from 'react'
import Nav from '../Nav/Nav'
import Logo from './Logo'

const TopBar = () => {
    return (
        <div className="top-bar container-fluid full-padding">
            <div className="top-bar__content">

                <Logo />

                <Nav />

            </div>      
        </div>
    )
}

export default TopBar
