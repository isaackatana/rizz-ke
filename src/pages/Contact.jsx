import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact</h1>
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
  )
}

export default Contact