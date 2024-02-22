import React from 'react'
import { Stars } from 'react-bootstrap-icons'
import s from "./style.module.css"

export default function Header() {
  return (
    <div className={s.container}>
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
            <a className="navbar-brand" href="/"><Stars /></a>
            <div className={s.hrdiv}><hr className={`ms-auto ${s.line}`}></hr></div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  " id="navbarNav">

            <ul className={`navbar-nav ms-auto bg-transparent w-50  ${s.ulmarg}`}>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">00 Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/destination">01 Destinations</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/crew">02 Crew</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="/technology">03 Technologies</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
