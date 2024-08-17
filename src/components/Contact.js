import React,{useState,useRef} from 'react'

import CustomHook from './CustomHook'

const Contact = () => {
  const [listConatcts]=useState([
    {
      title: 'Phone number',
      value: '+91 7093809973'
    },
    {
      title: 'Email',
      value: 'sumanthgubbala123@gmail.com'
    }
  ]);
  const refTab =useRef()
  const divs= useRef([])
  CustomHook(refTab,divs);
  return (
   <section className='contacts' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
         This is My Contacts
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        You can contact me at the following details
      </div>
      <div className='list' ref={(el) => el && divs.current.push(el)}>
        {
          listConatcts.map((contact, index) =>(
            <div key={index} className='item'>
            <h3>{contact.title}</h3>
            <div>{contact.value}</div>
            </div>
          ) )
            

          
        }
      </div>
   </section>
  )
}

export default Contact