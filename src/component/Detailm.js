import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const Detailm = ({data,item}) => {
  
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
        {isV === 1 &&
         <SwiperSlide key={item.id}>
          <figure>
            {vid8.map(item=>(
              <iframe key={item.id} src={`https://www.youtube.com/embed/${item.key}`}></iframe>
            ))}
          </figure>
          </SwiperSlide>
        }
        {isV === 2 &&
         <SwiperSlide key={item.id}>
          <figure>
            {backdr8.map(item=>(
              <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.file_path}`}></img>
            ))}
          </figure>
          </SwiperSlide>
        }
        {isV === 3 &&
          <SwiperSlide key={item.id}>
          <figure className='poster'>
            {pos8.map(item=>(
              <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.file_path}`}></img>
            ))}
          </figure>
          </SwiperSlide>
        }

      </Swiper>
    </>
  )
}

export default Detailm