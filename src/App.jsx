import './App.css'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PostContainer from './components/Blog/BlogContainer'
import NewBlog from './components/Blog/NewBlog'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />

          <Route path='/news/blog-container' element={<PostContainer/>}/>
          <Route path='/news/new-blog' element={<NewBlog/>}/>
        </Routes>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
