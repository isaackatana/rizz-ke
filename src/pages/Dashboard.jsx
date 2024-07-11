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
    <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | RiZz News Media</title>
        <link rel="com" href="" />
        <meta property="og:image" content="https://scontent-mba1-1.xx.fbcdn.net/v/t31.18172-8/13320501_1089637717763389_8962331895729566621_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=b895b5&_nc_eui2=AeHa0EjhNmEIH14DFmNz5KU_m5MpVeqV7XKbkylV6pXtcuDuocH4Z2D_XDROgnImLAyYXLKQ79egeHBmu1OxO4gc&_nc_ohc=_2uo_BHpkcsQ7kNvgEcnD0-&_nc_ht=scontent-mba1-1.xx&oh=00_AYD-GiyD-NdNU9Vq5yuYh6c9L_puwdKzSpUpuFiWJCN_Wg&oe=66B77200"></meta>
    </Helmet>
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