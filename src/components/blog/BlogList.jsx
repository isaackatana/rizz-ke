import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemove} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

// import mongoose from "mongoose";

function BlogList(props) {

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
                <button><FontAwesomeIcon icon={faEdit}/></button>
                <button><FontAwesomeIcon icon={faRemove}/></button>
            </div>
        </div>
      ))}
    </>
  )
}

export default BlogList