import React from 'react'
import s from "./style.module.css"
import moon from "../../assets/destination/image-moon.png"
import DestinationSchema from '../../components/DestinationSchema/DestinationSchema'


export default function Destination() {

  return (

      <div className={`${ s.container } mb-5`}>
      <div className={s.homy}>
        <div className={`d-flex justify-content-around ${s.homy_area}`}>
          <div className={s.home_explore}>
            <img  src={moon} alt='ime'/>
          </div>
          <DestinationSchema  numb = "0" />

        </div>
      </div>
    </div>

  )
}
 