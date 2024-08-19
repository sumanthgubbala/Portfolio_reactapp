import React,{useRef} from 'react'

import CustomHook from './CustomHook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const refTab =useRef();
CustomHook(refTab)
  return (
    <section className='home' ref={refTab}>
      <div className='content'>
      <div className='name'>MY NAME IS<span> SUMANTH</span>
      </div>
      <div className='description'>
        Hi, I am Sumanth, a software developer with a passion for machine learning, full-stack development, and data analysis. 
        I enjoy solving complex problems and creating innovative solutions.
      </div>
      <a href='/resume.pdf' target='_blank' rel='noopenernoreferrer'>Download My Resume</a>

      </div>
      
      <div className='avatar'>
      <div className='card'>
        <img src='/avatar.jpg' alt='' />
         <div className='info'>
          <div>Developer</div>
          <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#441f51",}} />
          
         </div>
      </div>

      </div>

    </section>
  )
}

export default Home