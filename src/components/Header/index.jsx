import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import './index.css'


const Header = () => {
   const navigate = useNavigate();
  const onLogout = () =>{
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <nav className='nav-header'>
        <h1 className='logo-head'>Mana-Paatalu</h1>    
        <button className='logout-btn' type='button' onClick={onLogout} >Logout</button>  
    </nav>
  )
}

export default  Header