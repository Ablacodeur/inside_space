import React from 'react'
import s from "./style.module.css"
import mars from "../../assets/destination/image-mars.png"
import DestinationSchema from '../../components/DestinationSchema/DestinationSchema'

export default function Mars() {
  return (
    <div className={`${ s.container } mb-5`}>
    <div className={s.homy}>
      <div className={`d-flex justify-content-around ${s.homy_area}`}>
        <div className={s.home_explore}>
          <img  src={mars} alt='mars'/>
        </div>
        <DestinationSchema  numb = "1" />

      </div>
    </div>
  </div>

)
}
