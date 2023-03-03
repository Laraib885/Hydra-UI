import React from "react";
import { H1,Para,SubHeading } from "./Styled/Introduction.style";
import { Box } from "@mui/system";


const WHYBUILD = () =>{

    
    return(
        <Box>
    <Box sx={{display:"flex",alignItems:'center',justifyContent:'space-between',marginTop:'6rem'}}>
       
            <Box sx={{width:'100%'}}>
                <H1>WHY BUILD</H1>
                <SubHeading>WITH HYDRA?</SubHeading>
            </Box>
            
            <Para sx={{width:'100%'}}>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </Para>
            </Box>
            </Box>
)}

export default WHYBUILD;