import './App.css'
import Header from './components/Header'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/home/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import BlogContainer from './components/blog/BlogContainer'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/front-end/rizz-news-media' element={<Home/>} />
          <Route path='/front-end/rizz-news-media/contact' element={<Contact/>} />
          <Route path='/front-end/rizz-news-media/about' element={<About/>} />

          <Route path='/front-end/rizz-news-media/news/blog-container' element={<BlogContainer/>}/>
        </Routes>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
