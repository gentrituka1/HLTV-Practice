import React from 'react'
import './Header.css'



function Header() {
  return (
    <header>
            <ul className='header-pages'>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Matches</a></li>
                    <li><a href='#'>Results</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Stats</a></li>
                    <li><a href='#'>Galleries</a></li>
                    <li><a href='#'>Forums</a></li>
                    <li><a href='#'>Betting</a></li>
                    <li><a href='#'>Live</a></li>
                    <li><a href='#'>Fantasy</a></li>
            </ul>
            <div className='header-right-side'>
                <div className='header-search'>
                    <input type='text' placeholder='Search...' />
                    <button>Search</button>
                </div>
                <div className='header-icons'>
                    <p>i</p>
                    <p>i</p>
                </div>
            </div>
    </header>
  )
}

export default Header