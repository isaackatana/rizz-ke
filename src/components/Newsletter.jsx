import React from 'react'

function Newsletter() {
  return (
    <section className='newsletter'>
        <div className="overlay"></div>
        <div>
        <p>Subscribe to our mailing list for latest news updates</p>
        <form><input type="email" placeholder='Email'/><button type='submit'>Subscribe</button></form>
        </div>
    </section>
  )
}

export default Newsletter