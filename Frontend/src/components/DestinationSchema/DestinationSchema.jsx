import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from "./style.module.css"
import { DataAPI } from '../../api/data-api';
import { Box, Stack, Typography } from '@mui/material';

export default function DestinationSchema({numb}) {

    const [data,setData]= useState([]);
    async function fetchAllData(){
      try {
        const fetchData = await DataAPI.fetchDestinations();
        setData(fetchData);
      }
     catch (error) {
      console.error('Error fetching data:', error);
  
    }
    }
    console.log(data[0]);
  
  
    useEffect(()=>{
      fetchAllData();
    },[])
  
  
  return (
        <Box className={s.home_space}
        sx={{
        // backgroundImage: {xs: `url(${mobile_img})`, md: `url(${tablet_img})`, lg: `url(${desktop_img})`},
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover", // Ajout de cette ligne pour assurer que l'image couvre tout l'élément
        // height: "100vh", // Changement de "100" à "100vh" pour couvrir toute la hauteur de l'écran
        alignItems: "center", // Ajout de cette ligne pour centrer le contenu
        justifyContent: "center", // Ajout de cette ligne pour centrer le contenu
        textAlign:{xs: "center", md:"start"},
      }}

        
        >
        <container>
        <ul className={`navbar-nav d-flex justify-content-between bg-transparent  ${s.ulmarg}`} >
              <li className="nav-item "    >
              <Link to="/destination" className='text-white text-decoration-none text-uppercase'>Moon</Link>
              </li>
              <li className="nav-item ">
              <Link to="/destination/mars" className='text-white text-decoration-none text-uppercase'>Mars</Link>
              </li>
              <li className="nav-item ">
              <Link to="/destination/europa" className='text-white text-decoration-none text-uppercase'>europa</Link>
              </li>
              <li className="nav-item ">
              <Link to="/destination/titan" className='text-white text-decoration-none text-uppercase'>titan</Link>
              </li>
          </ul>
         { data.length!==0? <Typography sx={{ typography: { md: 'h4', xs: 'h2',lg:'h1' }, marginTop:"7%" }} textTransform="uppercase" >{data[numb].name}</Typography>: null}
          
         {data.length!==0? <Typography variant='p' >{data[numb].description}</Typography>: null}
          <hr />
          </container>
          <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          textAlign={{ xs: "center" }}
          paddingRight={{ md: 2 }}
          textTransform="uppercase"
          >
              <div >
              <p >avg.distance</p>
             { data.length!==0?<h6>{data[numb].distance}</h6>: null}
              </div>
              <div >
                <p >est.travel time</p>
              {data.length!==0?<h6>{data[numb].travel}</h6>: null}
              </div>
            </Stack>
        </Box>

  )
}
