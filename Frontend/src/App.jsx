import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import s from "./style.module.css"
import { Box } from "@mui/material";

export default function App() {


  return <div  className={s.container}>
  <Box>
    <Header/>
    <Outlet></Outlet>
  </Box>
  </div>
}

