import React, { useEffect, useState } from 'react'
import s from "./style.module.css";
import { DataAPI } from '../../api/data-api';
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import marc from "../../assets/crew/image-mark-shuttleworth.png";
import glover  from "../../assets/crew/image-victor-glover.png";
import mobile_img from "../../assets/crew/background-crew-mobile.jpg";
import tablet_img from "../../assets/crew/background-crew-tablet.jpg";
import desktop_img from "../../assets/crew/background-crew-desktop.jpg"


import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';

// core version + navigation, pagination modules:
import {  Pagination , A11y} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Stack, Typography } from '@mui/material';


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
    <Box
      className={`${s.container} mb-5`}
      sx={{
        backgroundImage: {xs: `url(${mobile_img})`, md: `url(${tablet_img})`, lg: `url(${desktop_img})`},
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ajout de cette ligne pour assurer que l'image couvre tout l'élément
        height: "100vh", // Changement de "100" à "100vh" pour couvrir toute la hauteur de l'écran
        alignItems: "center", // Ajout de cette ligne pour centrer le contenu
        justifyContent: "center" // Ajout de cette ligne pour centrer le contenu

      }}
    >
    <div className={s.homy} >
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: "true" }}
      style={{
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
      >

    {data.map((item,index)=>{
      return(
      <SwiperSlide 
      key={index} 
      style={{ width: "100%" }}
       >
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems="center"
          textAlign={{ xs:"center",md:"start" }}
          justifyContent="center"
          marginTop={{ xs: 2, sm: 12, md: 10 }}
          fontSize={{ xs: 12, sm: 15, md: 16 }}
          sx={{ color: "silver" }} 
          key={index}
          flexDirection={{ xs:"column-reverse",md:'row' }}// to mmake the column reverse on the small devise
          >
                  <Box className={s.home_space} sx={{maxWidth:{xs:450,md: 400, lg:700}}}>
                      {data.length!==0 && <Typography className='text-uppercase text-white-50 fs-5'>{item.role}</Typography>}
                      { data.length!==0? <Typography sx={{ typography: { md: 'h4', xs: 'h4',lg:'h1' }, marginTop:"7%" }} textTransform="uppercase" >{item.name}</Typography>: null}
                      
                      {data.length!==0? <p className=''>{item.bio}</p>: null}
                  </Box>
                  <Box sx={{ maxHeight:{xs: 500, md: 500, lg:1 ,sm: 450 } , maxWidth:{xs:280,md: 400, lg:1, sm:300 }}}>
                      {index === 0 && <img src={douglas} alt={item.name + "image"}  style={{ maxHeight: "100%", maxWidth:"100%"}} />}
                      {index === 1 && <img src={marc} alt={item.name + "image"}  style={{ maxWidth: "100%"}} />}
                      {index === 2 && <img src={ansari} alt={item.name + "image"}  style={{ maxWidth: "100%"}} />}
                      {index === 3 && <img src={glover} alt={item.name + "image"}  style={{ maxWidth: "100%"}} />}               
                  </Box>

        </Stack>
      </SwiperSlide>
      );
    })}
  </Swiper>
  
  </div>
  </Box>

  );

}