import React, { useState } from "react";
import { AppBar, Grid, Toolbar,useTheme,useMediaQuery, Button } from "@mui/material";
import {Box,Tabs} from "@mui/material";
import { Anchor,Btn,Btn2 } from "./Styled/Navbar.styled";
import DrawerComp from "./Drawer";


const Navbar = () =>{
    const [value, setValue] = useState(); 
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm')) ;

    return(
        <AppBar elevation={2}>
            <Toolbar sx={{background:'#302c42'}}>
                {isMatch ? (<>
                    <Box sx={{display:'flex',alignItems:'center',width:'100%'}}>
                         <Box component='img'  src={require('../Components/Images/Vector.png')}/>
                         <Box sx={{marginLeft:'1rem'}} component='img' src={require('../Components/Images/Frame.png')}/>
                        </Box>
                <DrawerComp/>
                </>) : (
                <Grid container sx={{placeItems:'center'}}>
                    <Grid item xs={2}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                        <Box component='img'  src={require('../Components/Images/Vector.png')}/>
                         <Box sx={{marginLeft:'1rem'}} component='img' src={require('../Components/Images/Frame.png')}/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=> setValue(val)}>
                            <Anchor label='ABOUT'/>
                            <Anchor label='SERVICES'/>
                            <Anchor label='TECHNOLOGIES'/>
                            <Anchor label='HOW TO'/>
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={3}>
                        <Box display='flex'>
                            
                            <Btn sx={{marginLeft:'auto',"&:hover": {borderColor: "blue"}}} variant='outlined'>Contact us</Btn>
                            <Btn2 sx={{marginLeft:'2px'}} variant='contained'>JOIN HYDRA</Btn2>

                        </Box>
                    </Grid>
                </Grid>
                )}
            </Toolbar>
            
        </AppBar>
    )
}



export default Navbar;







