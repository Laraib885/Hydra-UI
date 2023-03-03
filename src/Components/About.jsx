import React from "react";
import { Box } from "@mui/material"
import { MainBox,H1,H2,Para,Btn,Img } from "./Styled/About.style";


const About = () =>{
    return(
        <MainBox>
            <Box sx={{width:'100%'}}>
                <Img component='img' src={require('../Components/Images/Mask group 2.png')}/>
            </Box>
            <Box sx={{width:'100%'}}>
                <H1>About</H1>
                <H2>HYDRA VR</H2>
                <Para>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                </Para>
                <Btn>LET’S GET IN TOUCH</Btn>
            </Box>
        </MainBox>
    )
}


export default About;