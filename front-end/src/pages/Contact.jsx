import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | RiZz News Media</title>
        <link rel="canonical" href="http://isaackatana.com/" />
    </Helmet>
    <div className='contact'>
        <div className='container'>
          <div>
            <div className='direct'>
              <div><FontAwesomeIcon icon={faPhone}/>+254 742 195 701</div>
              <div><FontAwesomeIcon icon={faEnvelope}/>admin@rizznewsmedia.com</div>
            </div>
            <div>
              <h1>Talk to us</h1>
              <form action="submit">
              <div className='names'><input type="text" placeholder='First name'/><input type="text" placeholder='Last name'/></div>
              <input type="email" placeholder='Email'/>
              <input type="email" placeholder='Phone (Optional)'/>
              <textarea placeholder='Message ...'></textarea>
              <div>
                <button type='submit' onclick="alert('Message Sent Successfully')">Send</button>
              </div>
            </form>
            </div>
          </div>
          <div>

          </div>
        </div>
    </div>
    </>
  )
}

export default Contact