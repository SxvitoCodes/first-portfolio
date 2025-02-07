import React from 'react'

const Footer = () => {
  return (
    <footer>
        <nav>
            <div className='nav-links-container'>
                <ul className='nav-links'>
                <li><a href="#profile">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <p>Copyright &#169; 2021. All Rights Reserved</p>
    </footer>
  )
}

export default Footer