import React from 'react'
import s from "./style.module.css"
import moon from "../../assets/destination/image-moon.png"
import mobile_img from "../../assets/destination/background-destination-mobile.jpg";
import tablet_img from "../../assets/destination/background-destination-tablet.jpg";
import desktop_img from "../../assets/destination/background-destination-desktop.jpg"
import DestinationSchema from '../../components/DestinationSchema/DestinationSchema'
import { Box, Stack } from '@mui/material'
import styled from '@emotion/styled'


export default function Destination() {
  return (
      <Box
      className={`${s.container} mb-5`}
      sx={{
        backgroundImage: {xs: `url(${mobile_img})`, md: `url(${tablet_img})`, lg: `url(${desktop_img})`},
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ajout de cette ligne pour assurer que l'image couvre tout l'élément
        height: "100vh", // Changement de "100" à "100vh" pour couvrir toute la hauteur de l'écran
        display: "flex", // Ajout de cette ligne pour centrer le contenu
        alignItems: "center", // Ajout de cette ligne pour centrer le contenu
        justifyContent: "center" // Ajout de cette ligne pour centrer le contenu
      }}

      >
      <Box className={s.homy} 
        textAlign={{ xs: "center" }}
      >
      <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems={{ xs:"center" ,md:"start"}}
          justifyContent={{ xs:"center" ,md:"start"}}
          marginTop={{ xs: 12, sm: 14, md: 30 }}
          fontSize={{ xs: 12, sm: 15, md: 16 }}
          sx={{ color: "silver" }} 
      >
          <Box flex={1.2}  sx={{ maxWidth:{xs: 200, md: 250, lg:1} }} >
            <img src={moon} alt='ime' style={{ maxWidth: "100%"}} />
          </Box>
          <Box flex={1} sx={{ marginTop:{xs:50, sm:30} }}>
          <DestinationSchema  numb = "0" />
          </Box>
      </Stack>
    </Box>
  </Box>
  )
}
 