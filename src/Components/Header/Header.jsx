import React, {useState}  from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    const [active, setActive] = useState(false)

    const toggleBurger = () => {
      setActive(!active)
    }
  
    console.log(active);

  return (
    <header className="header">
    <div className="container">
      <div className="header__wrap">
        <img src="/Digital Agency.png" alt="" className="logo" />

        <div className={`header__menu ${active ? 'active' : ''}`}>
          <nav className="nav">
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/contact"}>CONTACT</Link>
          </nav>
        </div>

        <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      </div>
      </header>
  )
}

export default Header