import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Blog from './Blog'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function BlogContainer() {
  return (
    <>
        <div className='blog-container'>
            <div className='container'>
                <div className="blog-content">
                    <div className="blog-header">
                        <img src='' alt=""/>
                        <div className="blog-title">
                            <h2>Kenyan music is busting with fresh talents </h2>
                            <p>6/27/2024</p>
                        </div>
                    </div>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aperiam nisi ducimus voluptatum eveniet doloribus similique repellendus quidem ratione, reiciendis quo, quas deleniti explicabo placeat necessitatibus quod cupiditate at error.</p>

                    <img src='' alt="" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam et ipsam molestiae animi dicta aperiam enim beatae, dignissimos esse at consequuntur cumque nisi ducimus itaque in voluptates impedit nobis!</p>

                    <video src='' controls></video>
                    
                </div>
                <div className="share-post">
                    <div>
                        <h3>Share on</h3>
                        <div className="wrapper">
                            <div><FontAwesomeIcon icon={faWhatsapp}/></div>
                            <div><FontAwesomeIcon icon={faFacebookF}/></div>
                            <div><FontAwesomeIcon icon={faXTwitter}/></div>
                        </div>
                    </div>
                </div>
            <section className="comments">
                <div className='comment-input'>
                    <h1>Leave a comment</h1>
                    <form action="">
                        <textarea name="" id="" placeholder='Comment...'></textarea>
                        <div>
                            <div></div>
                            <button>Post</button>
                        </div>
                    </form>
                </div>
                <div className="comments-display">
                    <div className="user-comment">
                        <div className='pp'>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div>
                            <h1>Isaac Katana</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quod doloribus dolores exercitationem ea voluptatem.</p>
                        </div>
                    </div>
                    <div className="user-comment">
                        <div className='pp'>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div>
                            <h1>Isaac Katana</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, dolore veritatis! Autem aspernatur tempora veniam rerum aperiam enim voluptatum sed ipsum nihil voluptas, voluptates ab labore aut non totam error!</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        <Blog/>
    </>
  )
}

export default BlogContainer