import { useState } from 'react'
import Blog from '../../components/blog/Blog'
import DBerry1 from './images/D-Berry1.jpg'
import DBerry2 from './images/D-Berry2.jpg'
import IntroVideo from './media/RiZz Media (Intro Video).mp4'


function Home() {

  const IMAGES = [DBerry1, DBerry2]

  const [ImageIndex, setImageIndex] = useState(0)
  
  return (
    <>
    <div className="home">
        <div className='hero'>
            <img src={IMAGES[ImageIndex]} alt=""/>
            <div>
                <video src={IntroVideo} controls></video>
            </div>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default Home