import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Button from '../component/Button'

const Movie = () => {
  let sort = {
    sort:["Popularity Descending",
          "Popularity Ascending",
          "Rating Descending",
          "Rating Ascending",
          "Name (A-Z)",
          "Name (Z-A)",
          "Release Date Descending",
          "Release Date Ascending"
        ],
    genre:[]
  }
  return (
    <div className='moviepage'>
      <Header/>

      <div>
        <h1>Movies</h1>
        <Button sort={sort.sort}/>    
        
        <article>
          <figure>
            <img src='./img/royal opera.jpg'/>
            <figcaption>Royal Opera House Live 2024/25: The Marriage of Figaro</figcaption>
            <p>1994<span>77%</span></p>
          
          </figure>
          <figure>
            <img src='./img/furiosa.jpg'/>
            <figcaption>Furiosa: A Mad Max Saga</figcaption>
          </figure>
          <figure>
            <img src='./img/dune.jpg'/>
            <figcaption>Dune</figcaption>
          
          </figure>
          <figure>
            <img src='./img/royal opera.jpg'/>
            <figcaption>Royal Opera House Live 2024/25: The Marriage of Figaro</figcaption>

          </figure>
          <figure>
            <img src='./img/furiosa.jpg'/>
            <figcaption>Furiosa: A Mad Max Saga</figcaption>
          </figure>
          <figure>
            <img src='./img/dune.jpg'/>
            <figcaption>Dune</figcaption>
          
          </figure>
          <figure>
            <img src='./img/royal opera.jpg'/>
            <figcaption>Royal Opera House Live 2024/25: The Marriage of Figaro</figcaption>
          
          </figure>
          <figure>
            <img src='./img/furiosa.jpg'/>
            <figcaption>Furiosa: A Mad Max Saga</figcaption>
          
          </figure>
          <figure>
            <img src='./img/dune.jpg'/>
            <figcaption>Dune</figcaption>
          
          </figure>
        </article>

        <p><button type='button'>Load More</button></p>
      </div>

      <Footer/>
    </div>
  )
}

export default Movie