import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import vehicule_p from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule_p from "../../assets/technology/image-space-capsule-portrait.jpg";
import spacespot_p from "../../assets/technology/image-spaceport-portrait.jpg";
import mobile_img from "../../assets/technology/background-technology-mobile.jpg";
import tablet_img from "../../assets/technology/background-technology-tablet.jpg";
import desktop_img from "../../assets/technology/background-technology-desktop.jpg";
import 'swiper/swiper-bundle.css';
import s from "./style.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DataAPI } from '../../api/data-api';
import { Box, Stack, Typography } from '@mui/material';

export default function Technology() {
  const [data, setData] = useState([]);

  async function fetchAllData() {
    try {
      const fetchData = await DataAPI.fetchTech();
      setData(fetchData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [])

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    customClass: s.customPagination,
  };


  return (
    <Box
      className={`${s.container} mb-5`}
      sx={{
        backgroundImage: {
          xs: `url(${mobile_img})`,
          md: `url(${tablet_img})`,
          lg: `url(${desktop_img})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={s.homy}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={100}
          mousewheel={true}
          direction='vertical'
          slidesPerView={1}
          pagination={pagination}
          style={{
            "--swiper-pagination-bullet-inactive-color": "#0a0a0a",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-vertical-gap": "16px",
            "--swiper-pagination-bullet-height": "30px",
            "--swiper-pagination-bullet-width": "30px",
            "--swiper-pagination-bullet-align": "center",
            "--swiper-pagination-left": "1%",
            // "--swiper-pagination-vertical-bottom": "-80vh",
            height: "100vh",
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "100%" ,height:"100vh"}}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  alignItems="center"
                  height="100vh"
                  textAlign={{ xs: "center", md: "start" }}
                  justifyContent={{ xs:"center", md:" space-around" }}
                  margin={{ md:10 }}
                  marginTop={{ xs: 2, sm: 5, md: 2 }}
                  fontSize={{ xs: 12, sm: 15, md: 16 }}
                  sx={{ color: "silver" }}
                  key={index}
                  flexDirection={{ xs: "column-reverse", md: 'row' }} // Column-reverse on small devices
                >
                  <Box sx={{ maxWidth: { xs: 650, sm: 700, md: 500, lg: 700 } }}>
                    {data.length !== 0 ? <Typography sx={{ typography: { md: 'h4', xs: 'h4', lg: 'h1' }, marginTop: "7%" }} textTransform="uppercase">{item.name}</Typography> : null}
                    {data.length !== 0 ? <Typography >{item.description}</Typography> : null}
                  </Box>
                  <Box sx={{ height: {xs: 250, sm: 500, md: 500, lg: 600}, width: { xs: 1, sm: 860} }}>
                    {index === 0 && <img src={vehicule_p} alt={item.name + "image"} style={{ height: "100%", width:"100%" , objectFit: "cover"}} />}
                    {index === 1 && <img src={capsule_p} alt={item.name + "image"} style={{ height: "100%", width:"100%" , objectFit: "cover"}} />}
                    {index === 2 && <img src={spacespot_p} alt={item.name + "image"} style={{ height: "100%", width:"100%" , objectFit: "cover"}} />}
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
