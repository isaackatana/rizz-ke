import Blog from "../../components/blog/Blog"

import DBerry2 from './images/D-Berry2.jpg'
import IntroVideo from './media/Comp 2.mov'


function Home() {
  
  return (
    <>
    <div className="home">
        <div className='hero'>
            <img src={DBerry2} alt=""/>
            <div>
                <video src={IntroVideo} controls loop></video>
            </div>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default Home