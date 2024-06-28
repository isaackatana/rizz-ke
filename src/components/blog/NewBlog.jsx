
function NewBlog() {
  return (
    <>
    <div className="new-blog">
        <div className="container">
            <h1>New Article</h1>
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
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default NewBlog