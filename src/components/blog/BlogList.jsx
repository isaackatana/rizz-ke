import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemove} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { useState } from "react";

// import mongoose from "mongoose";

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

  // const articleSchema = new mongoose.Schema({
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   markdown: {
  //     type: String,
  //     required: true
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  //   }
  // })

  // module.exports = mongoose.model("article", articleSchema)
  
  const blogs = props.blogs;

  console.log(blogs)
  return (
    <>
      {blogs.map((blog)=>(
        <div className="post"  key={blog.id}>
            <div className="thumbnail">
                <img src={blog.img} alt=""/>
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
              <div className="container">
                  <h1>Edit Article</h1>
                  <form action="/new/new-blog" method='POST'>
                      <div>
                          <label htmlFor="">Title</label>
                          <input type="text" name="" id="" required/>
                      </div>
                      <div>
                          <label htmlFor="">Markdown</label>
                          <textarea name="" id="" required></textarea>
                      </div>
                      <div className='action'>
                          <button onClick={toggleEditBlogModal}>Cancel</button>
                          <button>Save</button>
                      </div>
                  </form>
              </div>
          </div>
      )}
    </>
  )
}

export default BlogList