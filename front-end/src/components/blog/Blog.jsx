import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import BlogList from './BlogList';

import DBerry1 from './images/D-Berry1.jpg'
import DBerry2 from './images/D-Berry2.jpg'

function Blog(props) {
    const [blogs, setBlogs] = useState([
        {
            Thumbnail: `${DBerry1}`,
            title: 'Kenyan music is busting with fresh talents from the coast',
            CreatedAt: new Date(),
            id: 1
        },
        {
            Thumbnail: `${DBerry2}`,
            title: 'Kenyan music is busting with fresh talents from the coast',
            CreatedAt: new Date(),
            id: 2
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
                            <Link to="#">Music</Link>
                            <Link to="#">Lifestyle</Link>
                            <Link to="#">Fashion</Link>
                            <Link to="#">Politics</Link>
                        </div>
                    </div>
                    <div className="wrapper">
                        <FontAwesomeIcon icon={faChevronRight} className='right'/>
                        <FontAwesomeIcon icon={faChevronLeft} className='left'/>

                        <BlogList blogs={blogs}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog