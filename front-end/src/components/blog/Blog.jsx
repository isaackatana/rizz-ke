import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAdd, faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import BlogList from './BlogList'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import DBerry1 from './images/D-Berry1.jpg'

function Blog(props) {
    const [blogs, setBlogs] = useState([
        {
            img: `${DBerry1}`,
            title: 'Kenyan music is busting with fresh talents from the coast',
            CreatedAt: new Date(),
            id: 1
        },
    ])

    const [NewBlogModal, setNewBlogModal] = useState(false);

    const toggleNewBlogModal = ()=>{
        setNewBlogModal(!NewBlogModal)
    }

    if (NewBlogModal){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }

  return (
    <>
    <div className='blog'>
        <h1  className="page-title">News</h1>
        <div className='container'>
            <div className="categories">
                <div className="category-list">
                    <a className="active">Latest</a>
                    <a href="#">Music</a>
                    <a href="#">Lifestyle</a>
                    <a href="#">Fashion</a>
                    <a href="#">Politics</a>
                </div>

                <div className="new-post">
                    <Link onClick={toggleNewBlogModal}><FontAwesomeIcon icon={faAdd}/></Link>
                </div>
            </div>
            <div className="wrapper">
                <FontAwesomeIcon icon={faChevronRight} className='right'/>
                <FontAwesomeIcon icon={faChevronLeft} className='left'/>

                <BlogList blogs={blogs}/>
            </div>
        </div>
    </div>
    {NewBlogModal &&(
        <div className="new-blog">
            <div className="overlay" onClick={toggleNewBlogModal}></div>
            <div className="container">
                <h1>New Article</h1>
                <form action="/new/new-blog" method='POST'>
                    <div>
                        <input type="text" name="" id="" placeholder='Title' required/>
                    </div>
                    <div>
                        <textarea name="" id="" placeholder='Markdown'required></textarea>
                    </div>
                    <div className='action'>
                        <button onClick={toggleNewBlogModal}>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )}
    </>
  )
}

export default Blog