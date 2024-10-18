import { BrowserRouter as Router,Routes, Route, Link, useParams, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Season from '../component/Season'
import Recommend from '../component/Recommend'

import { apiDetail } from '../api/api'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Detail = ({data}) => {
  const [res, setRes] = useState();
  const {id} = useParams(); 
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type'); // 'movie' 또는 'tv'
  // useEffect(() => {
  //   (async function() {
  //     if (type === 'tv') {
  //       setRes(await apiDetailtv('tv', id));
  //     } else {
  //       setRes(await apiDetail('movie', id));
  //     }
  //   })();
  // }, [type, id]);


  useEffect(()=>{
    (async function(){
      setRes(await apiDetail('movie',id))
    }())      
  },[type, id])
  

  // const { id } = useParams();
  // const [res, setRes] = useState();

  // useEffect(() => {
  //     (async function() {
  //         setRes(await apiDetail('movie', id));
  //     })();
  // }, [id]);



  
    const [isV,setIsV] = useState(1);
    const button3 = (contentId)=>{
      setIsV(contentId);
    }
    
    if(!res) return <>준비중..</>;
    console.log(res);

    const dotDate = (dateString) => {
      return dateString.replaceAll(/-/g, '.');
    };

    const certifi = res.certim.data.results.filter(item => item.iso_3166_1 === "US");
    const cer2 = certifi.flatMap(item => item.release_dates).slice(-1)[0] || null;
    console.log(cer2);

    const job = res.detai.data.casts.crew.filter(item => item.job === "Director");
    const job1 = job.map(d1 => d1.name).join('');

    const cast3 = res.detai.data.casts.cast
    .sort((a ,b)=> b.popularity - a.popularity)
    .slice(0, 3);
    
    const name3 = cast3.map(p3 => <span>{p3.name}</span>)

    const cast6 = res.detai.data.casts.cast
    .sort((a ,b)=> a.order - b.order)
    .slice(0, 6);
    console.log(cast6);

    const time = (min) => {
      const hours = Math.floor(min / 60);
      const remain = min % 60;
      return `${hours}h ${remain}m`
    }

    const uscore1 = (value) => {
      return Math.round(value * 10);
    }

    const money = (value) => {
      return new Intl.NumberFormat('en-US',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value);
    }

    const backdr8 = res.detai.data.images.backdrops
    .slice(0, 8);
    
    const pos8 = res.detai.data.images.posters
    .slice(0, 8);

    const sortVideo = res.detai.data.videos.results.sort((a, b) => {
      return (b.official === true) - (a.official === true);
    });

    const vid8 = sortVideo
    .slice(0, 8);

  return (
    <div className='detailpage'>
      <Header/>
          <main style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${res.detai.data.poster_path})`}}>
            <div className='box'>
              <div className='info'>
                <section>
                  <h1>{res.detai.data.title}</h1>
                  <div className='date'>
                    <article>
                      {/* <div>{cer2.certification}</div> */}
                      <div>{cer2 && cer2.certification ? (cer2.certification):("")}</div>
                      <p>{dotDate(res.detai.data.release_date)}
                      <span>●</span> {time(res.detai.data.runtime)} <span>●</span>
                      <div>
                        {res.detai.data.origin_country.map(item=>(
                        <p key={item.id}>{item}</p>))}
                      </div>
                      </p>
                    </article>
                    <p>User Score <span>{uscore1(res.detai.data.vote_average)}%</span></p>
                  </div>
                  <ul>
                    {res.detai.data.genres.map(genre=>(
                      <li key={genre.id}><Link to='/detail'>{genre.name}</Link></li>
                    ))}
                  </ul>
                </section>
                <article>
                  <div className='overview'>
                    <h2>Overview</h2>
                    <p>{res.detai.data.overview}</p>
                  </div>
                  <div className='name'>
                    <div className='director'>
                      <h2>Director</h2>
                      <p>{job1}</p>
                    </div>
                    <div className='casts'>
                      <h2>Casts</h2>
                      <p>{name3} ...</p>
                    </div>
                  </div>
                </article>
                <em>"{res.detai.data.tagline}"</em>
                <div className='ott'>
                  <h2>Watch on</h2>
                  <div>
                    {res.ott.data.results.US?.rent ? (
                      res.ott.data.results.US.rent.map(item => (
                        <p key={item.id}>{item.provider_name}</p>
                      )) ) : (
                      <p>theater</p>
                    )}
                  </div>
                </div>
              </div>
              <p><img src={`https://image.tmdb.org/t/p/original/${res.detai.data.poster_path}`}/></p>
            </div>
          </main>
        
          <div>
            <section className='cast'>
              <div>
                <h2>Casts / Crew</h2>
                <Link to='./cast' state={{ data: res.detai.data }}>View All</Link>
              </div>
              <article>
                {cast6.map(item=>(
                  <figure key={item.id}>
                    {item.profile_path ? (
                    <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}/>
                    ) : (
                    <div style={{ 
                      width: '100%', height:'317.5px',
                      marginBottom: '10px', 
                      backgroundColor: 'lightgray', // 원하는 배경색
                      borderRadius: '5px'
                    }}>
                    </div>
                    )}
                    <figcaption>{item.name}</figcaption>
                    <p>{item.character}</p>
                  </figure>
                  ))}
              </article>
            </section>
            <section className='media'>
              <h2>Media</h2>
              <div>
                <ul>
                  <li>
                    <button className={isV === 1 ? 'selected': ''} onClick={()=>button3(1)}>
                      Videos<span>{res.detai.data.videos.results.length}</span></button>
                  </li>
                  <li>
                    <button className={isV === 2 ? 'selected': ''} onClick={()=>button3(2)}>
                    Backdrops<span>{res.detai.data.images.backdrops.length}</span></button>
                  </li>
                  <li>
                    <button className={isV === 3 ? 'selected': ''} onClick={()=>button3(3)}>
                    Posters<span>{res.detai.data.images.posters.length}</span></button>
                  </li>
                </ul>
                <Link to='./media' state={{ data: res.detai.data }}>View All</Link>
              </div>
              <article>
                <Swiper
                  slidesPerView={isV === 1 ? 2 : isV === 2 ? 2 : 4.2}
                  slidesPerGroup={isV === 1 ? 2 : isV === 2 ? 2 : 4}
                  navigation={true}
                  pagination={{clickable: true,}}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
                {isV === 1 && vid8.map(item=>(
                  <SwiperSlide key={item.id}>
                    <figure>
                      <iframe src={`https://www.youtube.com/embed/${item.key}`}frameborder="0" allowFullScreen></iframe>
                    </figure>
                  </SwiperSlide>
                ))}
                {isV === 2 && backdr8.map(item=>(
                  <SwiperSlide key={item.id}>
                    <figure>
                      <img src={`https://image.tmdb.org/t/p/original/${item.file_path}`}></img>
                    </figure>
                  </SwiperSlide>
                ))}
                {isV === 3 && pos8.map(item=>(
                  <SwiperSlide key={item.id}>
                    <figure className='poster'>
                      <img src={`https://image.tmdb.org/t/p/original/${item.file_path}`}></img>
                    </figure>
                  </SwiperSlide>
                ))}
                </Swiper>

                {/* {isV === 1 &&
                  <figure>
                    {vid8.map(item=>(
                      <iframe key={item.id} src={`https://www.youtube.com/embed/${item.key}`}></iframe>
                    ))}
                  </figure>
                }
                {isV === 2 &&
                  <figure>
                    {backdr8.map(item=>(
                      <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.file_path}`}></img>
                    ))}
                  </figure>
                }
                {isV === 3 &&
                  <figure className='poster'>
                    {pos8.map(item=>(
                      <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.file_path}`}></img>
                    ))}
                  </figure>
                } */}
              </article>
            </section>
            <section className='metadata'>
              <h2>Information</h2>
              <div>
                <ul>
                  <li>
                    <b>Original Title</b>
                    <p>{res.detai.data.original_title}</p>
                  </li>
                  <li>
                    <b>Status</b>
                    <p>{res.detai.data.status}</p>
                  </li>
                  <li>
                    <b>Buget</b>
                    <p>${money(res.detai.data.budget)}</p>
                  </li>
                  <li>
                    <b>Revenue</b>
                    <p>${money(res.detai.data.revenue)}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Production Country</b>
                    <div>
                      {res.detai.data.production_countries.map(item=>(
                      <p key={item.id}>{item.name}</p>
                      ))}
                    </div>
                  </li>
                  <li>
                    <b>Spoken Languages</b>
                    <div>
                      {res.detai.data.spoken_languages.map(item=>(
                      <p key={item.id}>{item.english_name}</p>
                      ))}
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Production Company</b>
                    <div>
                      {res.detai.data.production_companies.map(item=>(
                      <p key={item.id}>{item.name}</p>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className='season'>
              <h2>All Season <span>{res.rec.data.results.length}</span></h2>
              <article>
                <Season data={res.rec.data.results}/>
                <figure>
                  <img src='./img/dune.jpg'/>
                  <figcaption>Dune</figcaption>
                </figure>
              </article>
            </section>
            <section className='rec'>
              <h2>Recommendations</h2>
              <article>
                <Recommend data={res.rec.data.results}/>
                {/* {res.rec.data.results.map(item=>(
                  <figure key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                    <figcaption>{item.title}</figcaption>
                  </figure>
                  ))} */}
              </article>
            </section>
          </div>
      <Footer/>
    </div>
  )
}

export default Detail