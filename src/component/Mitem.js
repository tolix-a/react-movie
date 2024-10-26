import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Mitem = ({data, type}) => {
  
  
    // const navigate = useNavigate();

    // const handleFigureClick = (id) => {
    //     navigate(`/detail/${id}`);
    // };

  console.log(data,'==============')
  
  // const myear = data.release_date ? item.release_date.split("-",1) : '';
  // const tyear = data.first_air_date ? item.first_air_date.split("-",1) : '';
  
  return (
    <>
      <Swiper
        slidesPerView={6.2}
        slidesPerGroup={6}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map(item=>
            <SwiperSlide key={item.id}>

          {/* <figure onClick={() => handleFigureClick(item.id)}> */}
          {/* <Link to={`./detail/${item.id}`}> */}
          <Link to={`./detail/${item.media_type || type || 'movie'}/${item.id}`}>
          <figure>
            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
            <figcaption>{item.title || item.name}</figcaption>
            <p>{item.release_date ? item.release_date.split("-",1) : '' 
            || 
            item.first_air_date ? item.first_air_date.split("-",1) : ''} <span>{item.vote_average}%</span> </p>
          </figure>
          </Link>
            </SwiperSlide>
          )
        }


      {/* <figure>
      <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}/>
      <figcaption>{data.title || data.name}</figcaption>
      <p>{myear || tyear} <span>{data.vote_average}%</span> </p>
      </figure> */}

    </Swiper>
    </>
  )
}

export default Mitem