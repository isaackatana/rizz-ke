import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <div className='container'>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum voluptates tempore nesciunt ea rem fugit dolorum temporibus, adipisci vel beatae. </p>
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
          <div>

          </div>
        </div>
    </div>
  )
}

export default Contact