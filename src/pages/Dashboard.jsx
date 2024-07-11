import { faAdd, faEdit, faRemove, faSave, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { useState } from "react";
import Blog from "../components/blog/Blog";

function Dashboard() {
    // Edit .....................
    const [EditBlogModal, setEditBlogModal] = useState(false);

    const toggleEditBlogModal = ()=>{
        setEditBlogModal(!EditBlogModal)
    }

    if (EditBlogModal){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }

    // New .....................

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
    <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="container">
            <div className="new-post">
                <Link onClick={toggleNewBlogModal}><FontAwesomeIcon icon={faAdd}/></Link>
            </div>
        </div>
    </div>

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
                        <button onClick={toggleNewBlogModal}><FontAwesomeIcon icon={faXmark}/></button>
                        <button><FontAwesomeIcon icon={faSave}/></button>
                    </div>
                </form>
            </div>
        </div>
    )}

    <Blog/>
    </>
  )
}

export default Dashboard