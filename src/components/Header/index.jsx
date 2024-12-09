import './index.css'


const Header = () => {
  return (
    <nav className='nav-header'>
        <h1 className='logo-head'>Mana-Paatalu</h1>
        <ul className='list'>
            <li>
                <button className='logout-btn'>Logout</button>
            </li>
        </ul>
    </nav>
  )
}

export default Header