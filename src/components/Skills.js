import React,{useState,useRef} from 'react'
import CustomHook from './CustomHook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3 ,faJs ,faJava,faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const [listSkills] =useState([
    {
      name: 'java',
      icon: faJava
    },
    {
      name: 'Python',
      icon: faPython
    },
    {
      name: 'React',
      icon: faReact
    },
    {
      name: 'Html',
      icon: faHtml5
    },
    {
      name: 'Css',
      icon: faCss3
    },
    {
      name: 'JavaScript',
      icon: faJs
    },
    {
      name: 'Database',
      icon: faDatabase
    }
   
    
  ])
  const refTab =useRef()
  const refDivs=useRef([]);
  CustomHook(refTab,refDivs)
  return (
    <section className='skills' ref={refTab}>
      <div className='title' ref={(el) => el && refDivs.current.push(el)}>
        This is My Skills
      </div>
      <div className='des' ref={(el) => el && refDivs.current.push(el)}>

      </div>
      <div className='list' >
        {
          listSkills.map((skill, index) => (
            <div key={index} className='item' ref={(el) => el && refDivs.current.push(el)}>
              <FontAwesomeIcon icon={skill.icon} />
              <h3>{skill.name}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills