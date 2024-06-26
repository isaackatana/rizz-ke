import Blog from "../components/Blog/Blog"

function Home() {
  
  return (
    <>
    <div className="home">
        <div className='hero'>
            <img src="./src/assets/images/D-Berry/6.jpg" alt=""/>
            <div>
                <video src="./assets/media/" controls loop></video>
            </div>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default Home