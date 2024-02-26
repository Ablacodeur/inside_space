import React from 'react'
import s from "./style.module.css"

export default function Home() {
  return (
    <div className={`${ s.container } mb-5`}>
      <div className={s.homy}>
        <div className={`d-flex justify-content-around ${s.homy_area}`}>
          <div className={s.home_space}>
            <h5 className='text-uppercase '>Aliqua  duis quis exercitation  incididunt commodo.</h5>
            <p className={`text-uppercase  fs-1 ${s.big_word}`}>space</p>
            <p className=''> Deserunt excepteur tempor eiusmod est cupidatat incididunt consequat aute est Lorem ex. Mollit amet exercitation ex consectetur cillum tempor. Est non labore do eu id. Occaecat reprehenderit consectetur nisi sit veniam proident laboris.</p>
          </div>
          <div className={s.home_explore}>
            <p className='rounded-circle   text-uppercase'>explore</p>
          </div>
        </div>
      </div>
    </div>
  )
}
