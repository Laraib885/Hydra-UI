import React from "react";
import { H1,MainBox,Para,SubHeading } from "./Styled/Introduction.style";
import { Box } from "@mui/system";


const Introduction = () =>{

    
    return(
        
    <MainBox>
       
            <Box sx={{width:"100%"}}>
                <H1>INTRODUCTION</H1>
                <SubHeading>TO HYDRA VR</SubHeading>
            </Box>
            <Box sx={{width:"100%"}}>
            <Para>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </Para>
            </Box>
            </MainBox>
            
)}

export default Introduction;