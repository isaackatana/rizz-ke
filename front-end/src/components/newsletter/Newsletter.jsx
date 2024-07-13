import React from 'react'

function Newsletter() {
  return (
    <>
    <div className="newsletter">
        <div className="overlay"></div>
        <div>
            <p>Subscribe to our mailing list for latest news update</p>
            <form action="">
                <input type="text" placeholder='Your Email'/>
                <button>Subscribe</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Newsletter