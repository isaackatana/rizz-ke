import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>About RiZz</title>
        <link rel="canonical" href="http://isaackatana.com/" />
    </Helmet>
    <div className='about'>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum voluptates tempore nesciunt ea rem fugit dolorum temporibus, adipisci vel beatae. Repellendus delectus ipsam ad quos ex enim aliquam voluptates fugiat animi cum natus asperiores veritatis sapiente impedit iusto illum odit fuga consequuntur ab possimus repellat eum, quod quae autem.</p>
        </div>
    </div>
    </>
  )
}

export default About