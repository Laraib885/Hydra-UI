import React from "react";
import Header from "./Header";
import './App.css'
import Contact from "./Components/Contact";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import WHYBUILD from "./Components/WhyBuilt";
import { Box } from "@mui/material";
import Service from "./Components/Service";
import Ellipse from "./Components/Ellipse";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const App = () =>{
  return(
    <Box>
      <Navbar/>
      <Header/>
      <Contact/>
      <Introduction/>
      <About/>
      <WHYBUILD/>
      <Service/>
      <Ellipse/>
      <Form/>
      <Footer/>
    </Box>
  )
}

export default App;