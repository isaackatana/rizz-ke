import React from 'react'
import Blog from './Blog'

function NewBlog() {
  return (
    <>
    <div className="new-blog">
        <h1>New Blog</h1>
        <form action="/new/new-blog" method='POST'>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Description</label>
                <textarea name="" id=""></textarea>
                <input type="text" />
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    </div>
    <Blog/>
    </>
  )
}

export default NewBlog