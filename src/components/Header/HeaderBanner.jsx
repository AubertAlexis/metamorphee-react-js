import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'

const HeaderBanner = ({ 
    title = false, 
    blog = false, 
    withButton = false,
    little = false,
    badge = false
}) => {
    
    return (
        <header className="header">
            
            <TopBar />

            {title !== false && <div className="header__content">
                <div className={`container${!blog ? '-fluid' : ''}`}>
                    <h1 className={`header__title${little ? ' little' : ''}`}>{title}</h1>
                    {withButton && <Link to="/article-details" className="btn btn-transparent header__btn--article">Lire l'article</Link>}
                    {badge && <p className="badge badge-primary">Conférence</p>}
                </div>
            </div>}

        </header>
    )
}

export default HeaderBanner
