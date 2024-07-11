import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemove, faSave, faXmark} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { useState } from "react";

function BlogList(props) {

  const [EditBlogModal, setEditBlogModal] = useState(false);

    const toggleEditBlogModal = ()=>{
        setEditBlogModal(!EditBlogModal)
    }

    if (EditBlogModal){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
  
    const blogs = props.blogs;

    console.log(blogs)
  return (
    <>
      {blogs.map((blog)=>(
        <div className="post"  key={blog.id}>
            <div className="thumbnail">
                <img src={blog.Thumbnail} alt=""/>
                <div className="time">
                    <p>{blog.CreatedAt.toLocaleDateString()}</p>
                </div>
            </div>
            <div className="post-title">
                <h2>{blog.title}</h2>
                <Link to="/rizz-news-media/news/blog-container">Read more <FontAwesomeIcon icon={faArrowRight}/></Link>
            </div>
            <div className="edit-post">
                <button onClick={toggleEditBlogModal}><FontAwesomeIcon icon={faEdit}/></button>
                <button><FontAwesomeIcon icon={faRemove}/></button>
            </div>
        </div>
      ))}

      {EditBlogModal &&(
        <div className="edit-blog">
            <div className="overlay" onClick={toggleEditBlogModal}></div>
            <div className="container">
                <h1>Edit Article</h1>
                <form action="/new/new-blog" method='POST'>
                    <div>
                        <input type="text" name="" id="" placeholder="Title" required/>
                    </div>
                    <div>
                        <textarea name="" id="" placeholder="Markdown" required></textarea>
                    </div>
                    <div className='action'>
                        <button onClick={toggleEditBlogModal}><FontAwesomeIcon icon={faXmark} /></button>
                        <button><FontAwesomeIcon icon={faSave}/></button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </>
  )
}

export default BlogList