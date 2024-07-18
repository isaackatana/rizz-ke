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
import { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard'

import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/rizz-ke' element={<Home/>} />
          <Route path='/rizz-ke/contact' element={<Contact/>} />
          <Route path='/rizz-ke/about' element={<About/>} />

          <Route path='/rizz-ke/news/blog-container' element={<BlogContainer/>}/>
          <Route path='/rizz-ke/dashboard' element={<Dashboard/>}/>
        </Routes>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
