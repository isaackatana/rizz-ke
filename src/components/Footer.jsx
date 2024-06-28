import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import LoginPage from './LoginPage'

function Footer() {
  return (
    <>
    <footer>
        <div className="follow-us">
          <div><FontAwesomeIcon icon={faFacebookF}/></div>
          <div><FontAwesomeIcon icon={faXTwitter}/></div>
          <div><FontAwesomeIcon icon={faYoutube}/></div>
        </div>
        <div>
            <p>©2024 RiZz News Media</p><p>| Hi, Admin <a href="" onclick="alert('Hello Isaac')">Logout</a></p>
        </div>
    </footer>
    <LoginPage/>
    </>
  )
}

export default Footer