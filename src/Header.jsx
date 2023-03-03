import React from "react";
import { Box,Typography,Button,styled } from "@mui/material";


const Container = styled(Box)(({theme})=>({
    marginTop:'8rem',
    display: 'flex',
    // justifyContent: 'space-between',
    [theme.breakpoints.down(700)]:{
        display:'block',
        alignItems:'center'
    }
}))

const Img = styled(Box)(({theme})=>({
    width:'400px',
    [theme.breakpoints.down(700)]:{
        width:'250px',
        marginTop:'4rem',
        
    }
}))
    


const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "52px",
    lineHeight: "110%",
    color: "#FFFFFF",
    marginTop: "10px",
    [theme.breakpoints.down(700)]: {
        display:'flex',
      textAlign: "center",
      fontSize: "30px",
        padding:'20px',
        marginLeft:'auto'
    },
  }));

  const Para = styled(Typography)(({theme})=>({
    
   

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',

color: '#FFFFFF',
[theme.breakpoints.down(700)]: {
    textAlign: "center",
    // fontSize: "35px",
    lineHeight:'30px'
  },

  }))

const Btn = styled(Button)(({theme})=>({
    width: '214px',
    height: '48px',
    color: '#343045',

background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
borderRadius: '40px',
marginTop:'4rem',

[theme.breakpoints.down(700)]: {
    display:'flex',
    alignItems:'center',
    // textAlign: "center",
    margin:'20px auto'    
  },
}))



const Header = () =>{
    // const classes = useStyle();
    return(
        <Container >
        <Box>
            <Heading>Dive Into The Depths Of Virtual Reality</Heading>
            <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        nisl tincidunt eget. Lectus mauris eros in vitae .
            </Para>
        
        <Btn sx={{display:'flex'}}>BUILD YOUR WORLD</Btn>
        </Box>
        <Box sx={{textAlign:'center'}}>
            <Img component='img' src={require('../src/Components/Images/Mask group.png')}/>
        </Box>
        </Container>
    )
}

export default Header;