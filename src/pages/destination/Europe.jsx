import React from 'react'
import DestinationSchema from '../../components/DestinationSchema/DestinationSchema'
import s from "./style.module.css"
import europa from "../../assets/destination/image-europa.png"

export default function Europe() {
  return (
    <div className={`${ s.container } mb-5`}>
    <div className={s.homy}>
      <div className={`d-flex justify-content-around ${s.homy_area}`}>
        <div className={s.home_explore}>
          <img  src={europa} alt='mars'/>
        </div>
        <DestinationSchema  numb = "2" />

      </div>
    </div>
  </div>
  )
}
