import React,{useRef} from 'react'

import CustomHook from './CustomHook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
         <a href="https://www.instagram.com/i_s.u.m.a.n.t.h" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#441f50" }} />
        </a>
        <a href="https://www.facebook.com/sumanth.gubbala/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#441f51" }} />
        </a>
        <a href="https://github.com/sumanthgubbala" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#441f51" }} />
        </a>
        
        <a href="https://www.linkedin.com/in/sumanth-gubbala/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#441f51" }} />
        </a>
         </div>
      </div>

      </div>

    </section>
  )
}

export default Home