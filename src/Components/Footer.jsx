import React from "react";
import { Box,Tabs,Tab, Typography,Button } from "@mui/material";
import {styled} from "@mui/material";


const Text = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#FFFFFF',
    [theme.breakpoints.down(700)]:{
        alignItems:"center",
        display:'flex',
        justifyContent:'space-around'
    }
}))

const MainBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:'6rem',
    [theme.breakpoints.down(700)]:{
   
    display:'block',
    }
})) 


const Img = styled(Box)(({theme})=>({
    [theme.breakpoints.down(700)]:{
        
    }
}))

const Btn = styled(Button)(({theme})=>({
    width: '214px',
    height: '48px',
    background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
    borderRadius: '40px',
    color: '#343045',
    [theme.breakpoints.down(700)]:{
        display:'flex',
        margin:'0 auto'
    }
}))

const Anchor = styled(Tab)(({theme})=>({

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#FFFFFF',
    display:'block',
    [theme.breakpoints.down(700)]:{
        display:'none'
    }
}))

const Footer = () =>{
    return(
        <MainBox>
            <Box sx={{textAlign:'center'}}>
            <Img component='img' src={require('../Components/Images/Vector.png')}/>
            </Box>
            
            <Box>
                    <Anchor label='ABOUT'/>
                    <Anchor label='SERVICES'/>
                    <Anchor label='TECHNOLOGIES'/>
                    <Anchor label='HOW TO'/>
                    <Anchor label='JOIN HYDRA'/>
            </Box>
            
            <Box>
                    <Anchor label='F.A.Q'/>
                    <Anchor label='SITEMAP'/>
                    
                    <Anchor label='CONDITIONS'/>
                    <Anchor label='LICENSES'/>
            </Box>
            
                <Box>
                        <Box sx={{paddingTop:'25px'}}>
                        <Text>
                        SOCIALIZE WITH HYDRA
                        </Text>
                        </Box>
                        <Box sx={{paddingTop:'25px',textAlign:'center'}}>
                        <Box component='img' sx={{padding:'5px'}} src={require('../Components/Images/facebook.png')}/>
                        <Box component='img' sx={{padding:'5px'}} src={require('../Components/Images/instagram.png')}/>
                        <Box component='img' sx={{padding:'5px'}} src={require('../Components/Images/linkedin.png')}/>
                        <Box component='img' sx={{padding:'5px'}} src={require('../Components/Images/pinterest.png')}/>
                        <Box component='img' sx={{padding:'5px'}} src={require('../Components/Images/twitter.png')}/>
                        <Box component='img' sx={{padding:'5px'}} src={require('../Components/Images/youtube.png')}/>
                        </Box>
                        <Box sx={{paddingTop:'25px'}}s>
                        <Btn>BUILD YOUR WORLD</Btn>
                        </Box>
                    </Box>
        </MainBox>
    )
}

export default Footer;