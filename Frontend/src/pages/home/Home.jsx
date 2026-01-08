import React from 'react'
import s from "./style.module.css"
import { Box, Stack, Typography} from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore';
import mobile_img from "../../assets/home/background-home-mobile.jpg";
import tablet_img from "../../assets/home/background-home-tablet.jpg";
import desktop_img from "../../assets/home/background-home-desktop.jpg"

export default function Home() {
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
      <Box className={s.homy} >
          <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  alignItems="center"
                  height="70vh"
                  textAlign={{ xs: "center", md: "start" }}
                  justifyContent={{ xs:"center", md:" space-around" }}
                  margin={{ md:10 }}
                  marginTop={{ xs: 5, sm: 5, md: 12 }}
                  fontSize={{ xs: 12, sm: 15, md: 16 }}
                  sx={{ color: "silver" }}
            >
          <Box sx={{ maxWidth: { xs: 655, sm: 700, md: 500, lg: 700 } }}>
            <h5 className='text-uppercase'>Aliqua duis quis exercitation incididunt commodo.</h5>
            <Typography sx={{ typography: { md: 'h4', xs: 'h3',lg:'h1' }, marginTop:"7%" }}  textTransform="uppercase">space</Typography>
            <Typography variant='body1' component="p"   sx={{ color: "silver" }} >Exercitation cillum fugiat ut nostrud velit ullamco. Ut anim tempor fugiat consectetur id laboris culpa nisi qui id cillum elit aute labore. Ex elit anim laboris occaecat voluptate dolore irure dolor. Minim dolore quis pariatur cupidatat nisi ad. Consequat reprehenderit aute laboris niam ex quis. Sunt veniam qui aute do. </Typography>
          </Box>
          <Box sx={{ height: {xs: 250, sm: 400, md: 400, lg: 400}, width: { xs: 1, sm: 1, lg:1}}}>
            <ExploreIcon style={{ height: "100%", width:"100%"}}/>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
