import React from 'react'

function EditBlog() {
  return (
    <>
    <div className="edit-blog">
        <div className="container">
            <h1>Edit Article</h1>
            <form action="/new/new-blog" method='POST'>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Markdown</label>
                    <textarea name="" id=""></textarea>
                </div>
                <div className='action'>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default EditBlog