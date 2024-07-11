import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet'
import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Blog from './Blog'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function BlogContainer() {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Kenyan music is busting with fresh talents  | RiZz News</title>
            <link rel="com" href="" />
            <meta property="og:image" content="https://scontent-mba1-1.xx.fbcdn.net/v/t31.18172-8/13320501_1089637717763389_8962331895729566621_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=b895b5&_nc_eui2=AeHa0EjhNmEIH14DFmNz5KU_m5MpVeqV7XKbkylV6pXtcuDuocH4Z2D_XDROgnImLAyYXLKQ79egeHBmu1OxO4gc&_nc_ohc=_2uo_BHpkcsQ7kNvgEcnD0-&_nc_ht=scontent-mba1-1.xx&oh=00_AYD-GiyD-NdNU9Vq5yuYh6c9L_puwdKzSpUpuFiWJCN_Wg&oe=66B77200"></meta>
        </Helmet>
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
                        <textarea name="" id="" placeholder='Comment ...'></textarea>
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