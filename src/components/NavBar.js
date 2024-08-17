import React, { useState } from 'react'
import { connect ,useDispatch} from 'react-redux';
import { changeTabActive } from '../redux/action';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = ({activeTab}) => {
  const dispatch =useDispatch()   
    const [listNav] =useState(['home', 'skills','projects','contacts']);
    const [statusNav,setStatusNav] =useState('')
    const toggleNav = () =>{
      setStatusNav(statusNav === 'active' ? null : 'active')
    }
  return (
    <header><div className='logo'>
    <img src="/logo.png" alt=""/>
  </div>
    
    <nav className={statusNav}>
        {
            listNav.map((item, index) => 
                <span key={index} className={activeTab === item ? 'active' : ''}
                onClick={() => dispatch(changeTabActive(item), toggleNav())}
                >{item}</span>
            )
        }
    </nav>
    <div className='icon-bar'onClick={toggleNav}>
      <FontAwesomeIcon icon={faBars} />
    </div>

    </header>
  )
}
const mapStateToProps = (state) => ({
  activeTab:state.activeTab
})
export default connect(mapStateToProps,{changeTabActive})(NavBar)