import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAdd, faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import BlogList from './BlogList'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Blog(props) {
    const [blogs, setBlogs] = useState([
        {
            title: 'Kenyan music is busting with fresh talents from the coast',
            CreatedAt: new Date(),
            id: 1
        },
        {
            title: 'Kenyan Youths burn down parliament during Protest ',
            CreatedAt: new Date(),
            id: 1
        },
    ])

  return (
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
                    <Link to='/news/new-blog'><FontAwesomeIcon icon={faAdd}/></Link>
                </div>
            </div>
            <div className="wrapper">
                <FontAwesomeIcon icon={faChevronRight} className='right'/>
                <FontAwesomeIcon icon={faChevronLeft} className='left'/>

                <BlogList blogs={blogs}/>
            </div>
        </div>
    </div>
  )
}

export default Blog