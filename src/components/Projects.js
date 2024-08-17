import React,{useState,useRef} from 'react'
import CustomHook from './CustomHook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [projects] = useState([
    {
      name:'Real-time chating in website',
      description: 'This is a real-time chatting system in website',
      mission:'Full-Stack Developer (Front-end and Back-end), System analysis and desgin',
      Technologies:'HTML5, CSS3, React Js, MongoDb',
      image:'/project1.jpg'

    },
    {
      name:'Desease Prediction using machine learning',
      description: 'This is a disease prediction system using machine learning.The system aims to predict various diseases based on input symptoms, helping in early diagnosis and treatment planning. By utilizing supervised learning techniques, the model can analyze patient data and provide accurate predictions',
      mission:'Data Scientist, System analysis and desgin',
      Technologies:'Python, Supervised Machine Learning, Scikit-learn, Ensemble Learning',
      image:'/project2.png'
    },
    {
      name:'MCQs Generator using Gemini AI API',
      description: 'This project involves developing a comprehensive MCQs generator system using the Gemini AI API. The system automates the creation of multiple-choice questions (MCQs) based on specified criteria, streamlining the process of generating high-quality educational content. It features both a user-friendly front-end interface and a robust back-end for handling data and interactions with the AI API. The project includes system analysis and design to ensure efficient integration and performance.',
      mission:'Full-Stack Developer (Front-end and Back-end), System analysis and desgin',
      Technologies:'HTML5, CSS3, Python (LangChain)', 
      image:'/project3.png'

    }

  ]);
  const refTab =useRef()
  const refDivs=useRef([])
  CustomHook(refTab,refDivs)
  return (
    <div>
      <section className='projects' ref={refTab}>
        <div className='title' ref={(el) => el && refDivs.current.push(el)}>
          <h1>This is My Projects</h1>
        </div>
        <div className='des' ref={(el) => el && refDivs.current.push(el)}>
          <p>I have worked on a diverse range of projects that showcase my skills in machine learning, full-stack development, and system design.</p>
        </div>
        <div className='list'>
          {
            projects.map((value,key) => (
            <div key={key} className='item' ref={(el) => el && refDivs.current.push(el)}>
              <div className='images'> <img src={value.image} alt={value.name} /></div>
              <div className='content'><h3>{value.name}</h3>
              <div className='des'> {value.description}</div>
              <div className='mission'>
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                      <div className='de'>{value.mission}</div>
                  </div>
              </div>
              <div className='mission'>
                <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <div>
                  <h4>Technologies</h4>
                  <div className='language'>{value.Technologies}</div>
                </div>
              </div>
            </div>
          </div>
          ))
          }
        </div>
      </section>
    </div>
  )
}

export default Projects