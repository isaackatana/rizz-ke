import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Footer() {
  const [LoginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setLoginModal(!LoginModal)
  }

  if (LoginModal){
    document.body.classList.add('active')
  } else {
    document.body.classList.remove('active')
  }

  return (
    <>
    <footer>
        <div className="follow-us">
          <div><FontAwesomeIcon icon={faFacebookF}/></div>
          <div><FontAwesomeIcon icon={faXTwitter}/></div>
          <div><FontAwesomeIcon icon={faYoutube}/></div>
        </div>
        <div>
            <p>©2024 RiZz News Media</p><p>| Hi, Admin <Link onClick={toggleLoginModal}>Logout</Link></p>
        </div>
    </footer>
    {LoginModal &&(
      <>
      <div className="overlay" onClick={toggleLoginModal}>
        <div className="login-page">
          <div className="login">
            <FontAwesomeIcon icon={faXmark} onClick={toggleLoginModal}/>
            <h1>Login</h1>
            <form action="">
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <div>
                <div></div>
                <button>Login</button>
              </div>
            </form>
            <div className='switch'>
              <p>Don't have an account</p><a href="#">Register</a>
            </div>
          </div>
          <div className="register">
            <FontAwesomeIcon icon={faXmark} onClick={toggleLoginModal}/>
            <h1>Register</h1>
            <form action="">
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <div>
                <div></div>
                <button>Register</button>
              </div>
            </form>
            <div className='switch'>
              <p>Already have an account</p><a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
      </>
    )}
    </>
  )
}

export default Footer