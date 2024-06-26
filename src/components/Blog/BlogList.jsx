import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faRemove} from '@fortawesome/free-solid-svg-icons'

function BlogList(props) {
  const blogs = props.blogs;

  console.log(blogs)
  return (
    <>
      {blogs.map((blog)=>(
        <div className="post"  key={blog.id}>
            <div className="thumbnail">
                <img src="./" alt=""/>
                <div className="time">
                    <p>{blog.CreatedAt.toLocaleDateString()}</p>
                </div>
            </div>
            <div className="post-title">
                <h2>{blog.title}</h2>
                <Link to="/news/blog-container">Read more</Link>
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