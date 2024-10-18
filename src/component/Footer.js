import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div>
        <p><Link to='/'>API.MTV</Link></p>
        <div className='h-menu'>
          <nav>
            <Link to='/movie'>Movies</Link>
            <Link to='/tv'>TV Shows</Link>
            <Link to='/detail'>Random</Link>
          </nav>
          <nav>
            <Link to='/movie'>Movies</Link>
            <Link to='/tv'>TV Shows</Link>
            <Link to='/detail'>Random</Link>
          </nav>
          <nav>
            <Link to='/movie'>Movies</Link>
            <Link to='/tv'>TV Shows</Link>
            <Link to='/detail'>Random</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer