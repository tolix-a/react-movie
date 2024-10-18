import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Upcomin = ({data, type}) => {

  const dotDate = (dateString) => {
    return dateString.replace(/-/g, '.');
  };

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
        {data.map(item=>(
          <SwiperSlide key={item.id}>
            <Link to={`./detail/${item.media_type || type || 'movie'}/${item.id}`}>
              <figure>
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                <figcaption>{item.title}</figcaption>
                <p>{dotDate(item.release_date)} <span></span> <b>US</b></p>
              </figure>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default Upcomin