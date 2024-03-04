import React, { useEffect, useState } from 'react'
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import vehicule_p from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule_p from "../../assets/technology/image-space-capsule-portrait.jpg";
import spacespot_p from "../../assets/technology/image-spaceport-portrait.jpg";
import 'swiper/swiper-bundle.css';

import s from "./style.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DataAPI } from '../../api/data-api';


export default function Technology() {

  const [data,setData]= useState([]);

  async function fetchAllData(){
    try {
      const fetchData = await DataAPI.fetchTech();
      setData(fetchData);
    }
   catch (error) {
    console.error('Error fetching data:', error);
  }
  };

  useEffect(()=>{
    fetchAllData();
  },[])

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    customClass: s.customPagination, // Ajouter une classe CSS personnalisée
  };


  return (
    <div className={`${ s.container } mb-5`} >
    <div className={s.homy} >
  <Swiper
 // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      mousewheel={true}
      direction="vertical"
      slidesPerView={1}
      pagination={pagination}    
      style={{
              "--swiper-pagination-bullet-inactive-color": "#0a0a0a",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-vertical-gap": "16px",
              // "--swiper-pagination-bullet-size": "50px",
              "--swiper-pagination-bullet-height": "30px",
              "--swiper-pagination-bullet-width": "30px",
              "--swiper-pagination-bullet-align": "center",
              "--swiper-pagination-left": "1%",
              "--swiper-pagination-vertical-bottom": "-80vh",





              height: "100vh"
              }}
  
    >
    {data.map((item,index)=>{
      return(
      <SwiperSlide key={index} style={{ width: "100%" }} >
        <div className={`d-flex justify-content-around ${s.homy_area}`} key={index}>
                  <div className={s.home_space}>
                      { data.length!==0? <p className={`text-uppercase  fs-1 ${s.big_word}`} > {item.name}</p>: null}
                      
                      {data.length!==0? <p className=''>{item.description}</p>: null}
                  </div>
                  <div className={`d-flex flex-column ${ s.home_explore }`}>
                      {index === 0 && <img src={vehicule_p} alt={item.name + "image"} />}
                      {index === 1 && <img src={capsule_p} alt={item.name + "image"} />}
                      {index === 2 && <img src={spacespot_p} alt={item.name + "image"} />}
                  </div>

        </div>
      </SwiperSlide>
      );
    })}
    </Swiper>  
    </div>
    </div>

    )

}
