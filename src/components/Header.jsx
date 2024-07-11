import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/rizz-media-icon.svg'

function Header() {

    const [MenuBar, setMenuBar] = useState(false)

    const toggleMenuBar =()=>{
        setMenuBar(!MenuBar)
    }

  return (
    <header>
        <div className="top-header">
            <div className="wrapper">
                <Link to='/rizz-news-media'><img className='logo' src={Logo} alt="" /></Link>
                <div className="follow-us">
                    <div><FontAwesomeIcon icon={faFacebookF}/></div>
                    <div><FontAwesomeIcon icon={faXTwitter}/></div>
                    <div><FontAwesomeIcon icon={faYoutube}/></div>
                </div>
            </div>
            <div className="nav">
                <div className="user-profile">
                    <Link to={'/rizz-news-media/dashboard'}><FontAwesomeIcon icon={faUser}/></Link>
                </div>
                <div>
                    <div className="burger" onClick={toggleMenuBar}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <ul className={`menu burger ${MenuBar ? 'menu-opened' : ''}`}>
                <li><NavLink to='/rizz-news-media'>Home</NavLink></li>
                <li><NavLink to='/rizz-news-media/contact'>Contact</NavLink></li>
                <li><NavLink to='/rizz-news-media/about'>About</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header