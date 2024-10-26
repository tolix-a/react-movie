import { BrowserRouter as Router,Routes, Route, Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header>
      <div className='h-menu'>
        <nav>
          <Link to='/movie'>Movies</Link>
          <Link to='/tv'>TV Shows</Link>
          <Link to='/search'>Random</Link>
        </nav>
        <div>
          <form className='head-search' onSubmit={handleSearch}>
            <button type='submit'><img src='/ion_search-outline.svg'/></button>
            <input type='text' placeholder='search'
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
          </form>
          <p><Link to='/'>API.MTV</Link></p>
        </div>
      </div>
    </header>
  )
}

export default Header