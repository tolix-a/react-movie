import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Detail = () => {

  return (
    <div className='detailpage'>
      <Header/>
      <main>
        <div className='box'>
          <div className='info'>
            <section>
              <h1>Three Colours: Blue</h1>
              <div className='date'>
                <article>
                  <div>19</div>
                  <p>1994.04.23 <span>●</span> 1h 37m <span>●</span> France</p>
                </article>
                <p>User Score <span>77%</span></p>
              </div>
              <ul>
                <li><Link to='/detail'>Drama</Link></li>
                <li><Link to='/detail'>Mystery</Link></li>
                <li><Link to='/detail'>Romance</Link></li>
              </ul>
            </section>
            <article>
              <div className='overview'>
                <h2>Overview</h2>
                <p>The wife of a famous composer survives a car accident that kills her husband and daughter. Now alone, she shakes off her old identity and explores her newfound freedom but finds that she is unbreakably bound to other humans, including her husband’s mistress, whose existence she never suspected.</p>
              </div>
              <div className='name'>
                <div className='director'>
                  <h2>Director</h2>
                  <p>Krzysztof Kieslowski</p>
                </div>
                <div className='casts'>
                  <h2>Casts</h2>
                  <p>Juliette Binoche, Benoît Régent, Florence Pernel ...</p>
                </div>
              </div>
            </article>
            <em>"Make room for new emotions."</em>
            <div className='ott'>
              <h2>Watch on</h2>
              <div>
                <p>Netflix</p>
                <p>Amazon Video</p>
                <p>Apple TV</p>
              </div>
            </div>
          </div>
          <p><img src='./img/blue.jpg'/></p>
        </div>
      </main>

      <div>
        <section className='cast'>
          <div>
            <h2>Casts / Crew</h2>
            <Link to='/cast'>View All</Link>
          </div>
          <article>
            <figure>
              <img src='./img/julie b.webp'/>
              <figcaption>Juliette Binoche</figcaption>
              <p>Julie</p>
            </figure>
            <figure>
              <img src='./img/vincent.jpg'/>
              <figcaption>Matthew Macfadyen</figcaption>
              <p>Wade Wilson / Deadpool / Nicepool</p>
            </figure>
            <figure>
              <img src='./img/julie b.webp'/>
              <figcaption>Juliette Binoche</figcaption>
              <p>Julie</p>
            </figure>
            <figure>
              <img src='./img/vincent.jpg'/>
              <figcaption>Matthew Macfadyen</figcaption>
              <p>Wade Wilson / Deadpool / Nicepool</p>
            </figure>
            <figure>
              <img src='./img/julie b.webp'/>
              <figcaption>Juliette Binoche</figcaption>
              <p>Julie</p>
            </figure>
            <figure>
              <img src='./img/vincent.jpg'/>
              <figcaption>Matthew Macfadyen</figcaption>
              <p>Wade Wilson / Deadpool / Nicepool</p>
            </figure>
          </article>
        </section>

        <section className='media'>
          <h2>Media</h2>
          <div>
            <ul>
              <li><button type='button'>Videos<span>2</span></button></li>
              <li><button type='button'>Backdrops<span>25</span></button></li>
              <li><button type='button'>Posters<span>62</span></button></li>
            </ul>
            <Link to='/media'>View All</Link>
          </div>
          <article>
            <figure>
              <img src='./img/backdr1.jpg'/>
              <img src='./img/backdr2.jpg'/>
            </figure>
            {/* <figure className='poster'>
              <img src='./img/blue.jpg'/>
              <img src='./img/dune.jpg'/>
              <img src='./img/blue.jpg'/>
              <img src='./img/dune.jpg'/>
              <img src='./img/blue.jpg'/>
              <img src='./img/dune.jpg'/>
            </figure> */}
          </article>
        </section>

        <section className='metadata'>
          <h2>Information</h2>
          <div>
            <ul>
              <li>
                <b>Original Title</b>
                <p>Trois couleurs : Bleu</p>
              </li>
              <li>
                <b>Status</b>
                <p>Released</p>
              </li>
              <li>
                <b>Buget</b>
                <p>$200,000,000.00</p>
              </li>
              <li>
                <b>Revenue</b>
                <p>$1,287,237,740.00</p>
              </li>
            </ul>
            <ul>
            <li>
                <b>Production Country</b>
                <div>
                  <p>France</p>
                  <p>Poland</p>
                  <p>Switzerland</p>
                </div>
              </li>
              <li>
                <b>Spoken Languages</b>
                <div>
                  <p>French</p>
                  <p>Polish</p>
                </div>
              </li>
              <li>
                <b>Production Company</b>
                <div>
                  <p>France 3 Cinéma</p>
                  <p>CED Productions</p>
                  <p>MK2 Films</p>
                  <p>CAB Productions</p>
                  <p>Studio Filmowe Tor</p>
                </div>
              </li>
            </ul>
          </div>
        </section>


        <section className='season'>
          <h2>All Season</h2>
          <article>
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
        </section>

        <section className='rec'>
          <h2>Recommendations</h2>
          <article>
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
        </section>

      </div>
      <Footer/>
    </div>
  )
}

export default Detail