import React from 'react'
import { Stars } from 'react-bootstrap-icons'
import s from "./style.module.css"
import { Box, Stack } from '@mui/material'

export default function Header() {
  return (
    <Box position='sticky' >
    <Stack className={s.container} position='sticky' >
    <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid ">
            <a className="navbar-brand text-white" href="/"><Stars /></a>
            <div className={s.hrdiv}><hr className={`ms-auto text-white ${s.line}`}></hr></div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
 
            <div className="collapse navbar-collapse  " id="navbarNav">

            <ul className={`navbar-nav ms-auto  bg-transparent w-50   ${s.ulmarg}`}>
                <li className="nav-item " >
                <a className="nav-link active text-white text-nowrap" aria-current="page" href="/">00 Home</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link text-white text-nowrap" href="/destination">01 Destinations</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link text-white text-nowrap" href="/crew">02 Crew</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link text-white text-nowrap" href="/technology">03 Technologies</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </Stack>
    </Box>
  )
}
