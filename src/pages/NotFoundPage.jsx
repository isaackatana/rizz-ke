import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="not-found-page">
        <div>
          <h1>404 </h1>
          <div>
            <p>Page Not Found <br /> Back To <Link to='front-end/rizz-news-media'>Home</Link></p>
          </div>
        </div>
    </div>
  )
}

export default NotFoundPage