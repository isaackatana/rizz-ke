import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAdd, faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import BlogList from './BlogList'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import DBerry2 from './images/D-Berry2.jpg'
import NewBlog from './NewBlog'
import EditBlog from './EditBlog'

function Blog(props) {
    const [blogs, setBlogs] = useState([
        {
            img: `${DBerry2}`,
            title: 'Kenyan music is busting with fresh talents from the coast',
            CreatedAt: new Date(),
            id: 1
        },
    ])

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
                    <Link to='/rizz-news-media/news/new-blog'><FontAwesomeIcon icon={faAdd}/></Link>
                </div>
            </div>
            <div className="wrapper">
                <FontAwesomeIcon icon={faChevronRight} className='right'/>
                <FontAwesomeIcon icon={faChevronLeft} className='left'/>

                <BlogList blogs={blogs}/>
            </div>
        </div>
    </div>

    <NewBlog/>
    <EditBlog/>
    </>
  )
}

export default Blog