import React from 'react'
import s from "./style.module.css"
import mars from "../../assets/destination/image-mars.png"
import DestinationSchema from '../../components/DestinationSchema/DestinationSchema'
import { Box, Stack } from '@mui/material'

export default function Mars() {
  return (
    <Box
    className={`${s.container} mb-5`}
    sx={{
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
        alignItems="center"
        justifyContent="center"
        marginTop={{ xs: 12, sm: 14, md: 30 }}
        fontSize={{ xs: 12, sm: 15, md: 16 }}
        sx={{ color: "silver" }} 
    >
        <Box flex={1.4}  sx={{ maxWidth:{xs: 200, md: 250, lg:1} }} >
          <img src={mars} alt='ime' style={{ maxWidth: "100%"}} />
        </Box>
        <Box flex={1} sx={{ marginTop:{xs:50, sm:30} }}>
        <DestinationSchema  numb = "1" />
        </Box>
    </Stack>
  </Box>
</Box>
)
}
