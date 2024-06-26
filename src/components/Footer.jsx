import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faGithub, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
        <div className="follow-us">
          <div><FontAwesomeIcon icon={faFacebookF}/></div>
          <div><FontAwesomeIcon icon={faInstagram}/></div>
          <div><FontAwesomeIcon icon={faXTwitter}/></div>
          <div><FontAwesomeIcon icon={faYoutube}/></div>
        </div>
        <div>
            <p>2024 RiZz News Media</p><p>| Hi, Isaac <a href="" onclick="alert('Hello Isaac')">Logout</a></p>
        </div>
    </footer>
  )
}

export default Footer