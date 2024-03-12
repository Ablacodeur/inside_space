import React from 'react'
import s from "./style.module.css"
import { Box, Stack, Typography, styled } from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore';
import mobile_img from "../../assets/home/background-home-mobile.jpg";
import tablet_img from "../../assets/home/background-home-tablet.jpg";
import desktop_img from "../../assets/home/background-home-desktop.jpg"

export default function Home() {
  const IconStyled = styled(ExploreIcon)({
    fontSize: "35vh"
  });
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
      <Box className={s.homy} textAlign={{ xs: "center", md: "start" }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems="center"
          marginTop={{ xs: 15, sm: 17, md: 40 }}
          fontSize={{ xs: 12, sm: 15, md: 16 }}
          sx={{ color: "silver" }} // Changer la couleur du texte en blanc
        >
          <Box flex={1.3}>
            <h5 className='text-uppercase'>Aliqua duis quis exercitation incididunt commodo.</h5>
            <Typography variant='h1' component="h1" textTransform="uppercase">space</Typography>
            <Typography variant='body1' component="p"   sx={{ color: "silver" }} >Exercitation cillum fugiat ut nostrud velit ullamco. Ut anim tempor fugiat consectetur id laboris culpa nisi qui id cillum elit aute labore. Ex elit anim laboris occaecat voluptate dolore irure dolor. Minim dolore quis pariatur cupidatat nisi ad. Consequat reprehenderit aute laboris niam ex quis. Sunt veniam qui aute do. </Typography>
          </Box>
          <Box flex={1} sx={{ textAlign: "end" }}>
            <IconStyled />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
