import React, { useEffect, useState } from 'react'
import s from "./style.module.css";
import { DataAPI } from '../../api/data-api';
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import marc from "../../assets/crew/image-mark-shuttleworth.png";
import glover  from "../../assets/crew/image-victor-glover.png";

import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';

// core version + navigation, pagination modules:
import {  Pagination , A11y} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Crew() {

    const [data,setData]= useState([]);

    async function fetchAllData(){
      try {
        const fetchData = await DataAPI.fetchCrew();
        setData(fetchData);
      }
     catch (error) {
      console.error('Error fetching data:', error);
    }
    };

    useEffect(()=>{
      fetchAllData();
    },[])
  

  
  return (
    <div className={`${ s.container } mb-5`} >
    <div className={s.homy} >
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: "true" }}
      style={{
              // "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              // "--swiper-pagination-bullet-size": "40px",
              // "--swiper-pagination-bullet-height": "1.8%",
              // "--swiper-pagination-bullet-width": "1.8%",
              }}
      >

    {data.map((item,index)=>{
      return(
      <SwiperSlide key={index} style={{ width: "100%" }} >
        <div className={`d-flex justify-content-around ${s.homy_area}`} key={index}>
                  <div className={s.home_space}>
                      {data.length!==0 && <span className='text-uppercase text-white-50 fs-5'>{item.role}</span>}
                      { data.length!==0? <p className={`text-uppercase  fs-1 ${s.big_word}`} >{item.name}</p>: null}
                      
                      {data.length!==0? <p className=''>{item.bio}</p>: null}
                  </div>
                  <div className={`d-flex flex-column ${ s.home_explore }`}>
                      {index === 0 && <img src={douglas} alt={item.name + "image"} />}
                      {index === 1 && <img src={marc} alt={item.name + "image"} />}
                      {index === 2 && <img src={ansari} alt={item.name + "image"} />}
                      {index === 3 && <img src={glover} alt={item.name + "image"} />}               
                  </div>

        </div>
      </SwiperSlide>
      );
    })}
  </Swiper>
  
  </div>
  </div>

  );

}