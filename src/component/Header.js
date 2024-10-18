import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import React from 'react'

const header = () => {
  return (
    <header>
      <div className='h-menu'>
        <nav>
          <Link to='/movie'>Movies</Link>
          <Link to='/tv'>TV Shows</Link>
          <Link to='/search'>Random</Link>
        </nav>
        <div>
          <div className='head-search'>
            <p><img src='/ion_search-outline.svg'/></p>
            <input type='text' placeholder='search'></input>
          </div>
          <p><Link to='/'>API.MTV</Link></p>
        </div>
      </div>
    </header>
  )
}

export default header