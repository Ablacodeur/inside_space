import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from "./style.module.css"
import { DataAPI } from '../../api/data-api';

export default function DestinationSchema({numb}) {

    const [data,setData]= useState([]);
    async function fetchAllData(){
      try {
        const fetchData = await DataAPI.fetchDestination();
        setData(fetchData);
      }
     catch (error) {
      console.error('Error fetching data:', error);
  
    }
    }
    console.log(data[0]);
  
  
    useEffect(()=>{
      fetchAllData();
    },[])
  
  
  return (
        <div className={s.home_space}>
        <ul className={`navbar-nav d-flex justify-content-between bg-transparent  ${s.ulmarg}`}>
              <li className="nav-item "    >
              <Link to="/destination" className='text-white text-decoration-none text-uppercase'>Moon</Link>
              </li>
              <li className="nav-item ">
              <Link to="/destination/mars" className='text-white text-decoration-none text-uppercase'>Mars</Link>
              </li>
              <li className="nav-item ">
              <Link to="/destination/europa" className='text-white text-decoration-none text-uppercase'>europa</Link>
              </li>
              <li className="nav-item ">
              <Link to="/destination/titan" className='text-white text-decoration-none text-uppercase'>titan</Link>
              </li>
          </ul>
         { data.length!==0? <p className={`text-uppercase  fs-1 ${s.big_word}`} >{data[numb].name}</p>: null}
          
         {data.length!==0? <p className=''>{data[numb].description}</p>: null}
          <hr />
          <div>
            <div >
              <div className={s.distance}>
              <p >avg.distance</p>
             { data.length!==0?<span>{data[numb].distance}</span>: null}
              </div>
              <div className={`${s.distance } ps-5`}>
                <p >est.travel time</p>
              {data.length!==0?<span>{data[numb].travel}</span>: null}
              </div>
            </div>
          </div>
        </div>

  )
}
