import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import s from "./style.module.css"

export default function App() {


  return <div  className={s.container}>
  <Header/>
    <Outlet></Outlet>

  </div>
}

