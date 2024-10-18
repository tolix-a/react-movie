import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Search = () => {

  const [isV, setIsV] = useState(1);
  const button3 = (contentId) =>{
    setIsV(contentId);
  }

  return (
    <div className='search'>
      <Header/>

      <div>
        <h1>Search Results " <span>Coraline</span> "</h1>
        <div className='tap'>
          <ul>
            <li>
              <button className={isV === 1 ? 'selected': ''}
              onClick={()=>button3(1)}>All<span>3</span></button>
              </li>
            <li>
              <button className={isV === 2 ? 'selected': ''}
              onClick={()=>button3(2)}>Movies<span>2</span></button>
              </li>
            <li>
              <button className={isV === 3 ? 'selected': ''}
              onClick={()=>button3(3)}>TV Shows<span>1</span></button>
              </li>
          </ul>
        </div>

        {isV === 1 &&
        <article className='all'>
          <figure>
            <p><img src='./img/dune.jpg'/></p>
            <div>
              <h3>Dune <span>(2009)</span></h3>
              <p>...</p>
              <p>Wandering her rambling old house in her boring new town, 11-year-old Coraline discovers a hidden door to a strangely idealized version of her life. In order to stay in the fantasy, she must make a frighteningly real sacrifice.</p>
            </div>
          </figure>
          <figure>
            <p><img src='./img/royal opera.jpg'/></p>
            <div>
              <h3>Royal Opera House Live 2024/25: The Marriage of Figaro <span>(2024)</span></h3>
              <p>Trailer • 1:17 • March 21, 2024</p>
              <p>Count Almaviva lives with his Countess on their estate near Seville. The Count has his eye on his wife’s maid Susanna, who is betrothed to the Count’s servant, Figaro. Much to Figaro’s dismay, the Count plans to seduce Susanna on wedding night. Meanwhile, Cherubino, the Count’s young page, is infatuated with the Countess, but has just been dismissed after being discovered with Barbarina, the gardener Antonio’s daughter.</p>
            </div>
          </figure>
          <figure>
            <p><img src='./img/dune.jpg'/></p>
            <div>
              <h3>Dune <span>(2009)</span></h3>
              <p>...</p>
              <p>Wandering her rambling old house in her boring new town, 11-year-old Coraline discovers a hidden door to a strangely idealized version of her life. In order to stay in the fantasy, she must make a frighteningly real sacrifice.</p>
            </div>
          </figure>
          
        </article>
        }
        {isV === 2 &&
        <article className='all'>
          <figure>
            <p><img src='./img/dune.jpg'/></p>
            <div>
              <h3>Dune <span>(2009)</span></h3>
              <p>Trailer • 1:17 • March 21, 2024</p>
              <p>Wandering her rambling old house in her boring new town, 11-year-old Coraline discovers a hidden door to a strangely idealized version of her life. In order to stay in the fantasy, she must make a frighteningly real sacrifice.</p>
            </div>
          </figure>
          <figure>
            <p><img src='./img/royal opera.jpg'/></p>
            <div>
              <h3>Royal Opera House Live 2024/25: The Marriage of Figaro <span>(2024)</span></h3>
              <p>Trailer • 1:17 • March 21, 2024</p>
              <p>Count Almaviva lives with his Countess on their estate near Seville. The Count has his eye on his wife’s maid Susanna, who is betrothed to the Count’s servant, Figaro. Much to Figaro’s dismay, the Count plans to seduce Susanna on wedding night. Meanwhile, Cherubino, the Count’s young page, is infatuated with the Countess, but has just been dismissed after being discovered with Barbarina, the gardener Antonio’s daughter.</p>
            </div>
          </figure>
        </article>
        }
        {isV === 3 &&
        <article className='all'>
          <figure>
            <p><img src='./img/dune.jpg'/></p>
            <div>
              <h3>Dune <span>(2009)</span></h3>
              <p>Trailer • 1:17 • March 21, 2024</p>
              <p>Wandering her rambling old house in her boring new town, 11-year-old Coraline discovers a hidden door to a strangely idealized version of her life. In order to stay in the fantasy, she must make a frighteningly real sacrifice.</p>
            </div>
          </figure>
        </article>
        }
      </div>

      <Footer/>
    </div>
  )
}

export default Search