import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Mitem from '../component/Mitem'
import Upcomin from '../component/Upcomin'
import { apiDetail, apiDetailtv, apiMain } from '../api/api'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  const [res, setRes] = useState();

  useEffect(()=>{

    (async function(){
        setRes(await apiMain())
      }())
      
    },[])
  
    const [isTday,setIsTday] = useState(true);
    const tClick = ()=>{
      setIsTday(true);
    }
    const wClick = ()=>{
      setIsTday(false);
    }

    if(!res) return <>준비중..</>;

  return (
    <div className='home'>
      <Header/>

      <main>
      <Swiper
        spaceBetween={30}
        speed={1000}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true,}}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {res.movieWeek.map(item => (
        <SwiperSlide className='box' key={item.id} data={item}>
          {/* <div className='backg'> */}
            <p><img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/></p>
            <div className='info'>
              <h1>{item.title}</h1>
              <div className='date'>
                <p>June 12, 2024</p>
                <article>
                  <p>1h 37m</p>
                  <p>All</p>
                </article>
              </div>
              <p>{item.overview}</p>
              <Link to={`./detail/movie/${item.id}`}>- Information</Link>
              <button>- Watch Trailer</button>
            </div>
          {/* </div> */}
        </SwiperSlide>
        ))}
      </Swiper>
      </main>

      <div>
        <section>
          <div>
            <h2>Trending Movies<span>{res.movieDay.length}</span></h2>
            <div>
              <button className={isTday? 'selected':''} onClick={tClick}>
                Today</button>
              <p>/</p>
              <button className={!isTday? 'selected':''} onClick={wClick}>
                This Week</button>
            </div>
          </div>
          <article>
            {isTday ? (
              <Mitem data={res.movieDay}/>
            ):(
              <Mitem data={res.movieWeek}/>
            )}
          </article>
        </section>

        <section>
          <h2>Upcoming</h2>
          <article className='up'>
            <Upcomin data={res.upcoming} type="movie"/>
          </article>
        </section>

        <section>
          <div>
            <h2>Top Rated Movies</h2>
            <Link to='/movie{`./detail/${item.id}`}'>View All</Link>
          </div>
          <article>
            <Mitem data={res.movieTop}/>
          </article>
          {/* <article>
              {res.movieTop.map(item => (
              <Mitem key={item.id} data={item}/>))}
          </article> */}
        </section>

        <section>
          <div>
            <h2>Trending TV</h2>
            <div>
              <button className={isTday? 'selected':''} onClick={tClick}>
                Today</button>
              <p>/</p>
              <button className={!isTday? 'selected':''} onClick={wClick}>
                This Week</button>
            </div>
          </div>
          <article>
            {isTday? (
              <Mitem data={res.tvDay}/>
            ) : (
              <Mitem data={res.tvWeek}/>
            )}
          </article>
          {/* <article>
            {isTday? (
              res.tvTop.map(item =>(
              <Mitem key={item.id} data={item}/>))
            ) : (
              res.tvWeek.map(item =>(
              <Mitem key={item.id} data={item}/>))
              )
            }
          </article> */}
        </section>

        <section>
          <div>
            <h2>Top Rated TV</h2>
            <Link to='/tv'>View All</Link>
          </div>
          <article>
            <Mitem data={res.tvTop} type="tv"/>
          </article>
        </section>

      </div>

      <Footer/>
    </div>
  )
}

export default Home