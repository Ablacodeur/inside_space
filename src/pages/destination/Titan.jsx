import React from 'react'
import DestinationSchema from '../../components/DestinationSchema/DestinationSchema'
import s from "./style.module.css"
import titan from "../../assets/destination/image-titan.png"

export default function Titan() {
  return (
    <div className={`${ s.container } mb-5`}>
    <div className={s.homy}>
      <div className={`d-flex justify-content-around ${s.homy_area}`}>
        <div className={s.home_explore}>
          <img  src={titan} alt='mars'/>
        </div>
        <DestinationSchema  numb = "3" />

      </div>
    </div>
  </div>
  )
}
