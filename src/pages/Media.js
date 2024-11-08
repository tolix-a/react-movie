import { BrowserRouter as Router,Routes, Route, Link, useParams, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Media = () => {
  const {id} = useParams();

  const [isV, setIsV] = useState(1);
  const button3 = (contentId) =>{
    setIsV(contentId);
  }

  const location = useLocation();
  const data = location.state?.data;
  console.log(data);


  return (
    <div className='mediapage'>
      <Header/>

      <div className='backto'>
        <div>
          {/* <Link to={data.casts ? `/detail/movie/${id}` : data.credits ? `/detail/tv/${id}` : '#'}> */}
          <Link to={data.casts ? `/detail/movie/${id}` : `/detail/tv/${id}`}>
            <p>{data.title ? (data.title) : (data.name) }</p>
            <img src='/arrow_back.svg'/>
          </Link>
          {/* <Link to={targetPath}> */}
          <Link to={data.casts ? `/detail/movie/${id}/cast` : `/detail/tv/${id}/cast`}>
            <p>Casts / Crew</p>
            <img src='/arrow_forward.svg'/>
          </Link>
        </div>
      </div>

      <section>
        <h2>Media</h2>
        <div className='tap'>
          <ul>
            <li>
              <button className={isV === 1 ? 'selected': ''}
              onClick={()=>button3(1)}>Videos<span>{data.videos.results.length}</span></button>
              </li>
            <li>
              <button className={isV === 2 ? 'selected': ''}
              onClick={()=>button3(2)}>Backdrops<span>{data.images.backdrops.length}</span></button>
              </li>
            <li>
              <button className={isV === 3 ? 'selected': ''}
              onClick={()=>button3(3)}>Posters<span>{data.images.posters.length}</span></button>
              </li>
          </ul>
        </div>
        <div>
        <article className='video'>
        {isV === 1 && data.videos.results.map(item=>
          <figure key={item.id}>
            <iframe src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allowFullScreen></iframe>
            <div>
              <p>{item.type} • 1:17 • March 21, 2024</p>
              <b>{item.name}</b>
            </div>
          </figure>
          /* <figure>
            <img src='./img/backdr2.jpg'/>
            <div>
              <p>Teaser • 0:16 • July 18, 2024</p>
              <b>It may not be a Wednesday, but we thought you might like this. ddd d dddddd ddddddddd dddddd d ddd</b>
            </div>
          </figure> */
        )}
        </article>
        <article className='backdrop'>
        {isV === 2 && data.images.backdrops.map(item=>
          <figure key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original/${item.file_path}`}/>
            <div>
              <p>Size <span>{item.width}x{item.height}</span></p>
            </div>
          </figure>
        )}
        </article>
        <article className='poster'>
        {isV === 3 && data.images.posters.map(item=>
          <figure key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original/${item.file_path}`}/>
            <div>
              <p>Size <span>{item.width}x{item.height}</span></p>
            </div>
          </figure>
          /* <figure>
            <img src='./img/dune.jpg'/>
            <div>
              <p>Size <span>3840x2160</span></p>
            </div>
          </figure> */
        )}
        </article>
        </div>

      </section>

      <Footer/>
    </div>
  )
}

export default Media