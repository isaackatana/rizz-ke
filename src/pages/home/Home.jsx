import Blog from "../../components/blog/Blog"

import DBerry2 from './images/D-Berry2.jpg'
import IntroVideo from './media/RiZz Media (Intro Video).mp4'


function Home() {
  
  return (
    <>
    <div className="home">
        <div className='hero'>
            <img src={DBerry2} alt=""/>
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