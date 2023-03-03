import React from "react";
import {Button, styled, Typography} from "@mui/material";
import {Box} from "@mui/material";
import {OutlinedInput} from "@mui/material";


const H1 = styled(Typography)(({theme})=>({
    // width: '238px',
    // height: '44px',
    fontFamily: 'Monterrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
    color: '#FFFFFF',
    [theme.breakpoints.down(700)]:{
        textAlign:'center',
        display:'flex',
        justifyContent:'space-around'
    }
    
}))

const Text = styled(Typography)(({theme})=>({
    // width: '541px',
    // height: '44px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '30px',
    lineHeight: '44px',
    color: '#FFFFFF',
    [theme.breakpoints.down(750)]:{
        // fontSize:'25px',
        display:'flex',
        justifyContent:'space-around',
        textAlign:'center'
    }
}))


const MainBox = styled(Box)(({theme})=>({
    background: 'radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '100px',
    marginTop:'6rem',
    padding:'80px',
    [theme.breakpoints.down(700)]:{
        display:'block',
        // alignItems:'center',
        justifyContent:'space-around'
    }
}))

const Field = styled(OutlinedInput)(({theme})=>({
    // width: 'auto',
    border: '2px solid #FFFFFF',
    // paddingTop:'20px',
    marginTop:'20px',
    borderRadius: '40px',
    [theme.breakpoints.down(700)]:{
        // width:'530px',
        // paddingTop:'20px',
        // marginTop:'20px'
    }
}))

const Field1 = styled(OutlinedInput)(({theme})=>({
    // width: 'auto',
    border: '2px solid #FFFFFF',
    borderRadius: '40px',
    marginTop:'20px',
    [theme.breakpoints.down(700)]:{
        display:'block',
        // width:'530px',
        // paddingTop:'20px',
        // marginTop:'20px'
    }
}))

const Field2 = styled(OutlinedInput)(({theme})=>({
    // width: 'auto',
    border: '2px solid #FFFFFF',
    borderRadius: '40px',
    marginTop:'20px',
    [theme.breakpoints.down(700)]:{
        display:'block',
        // width:"530px",
        height:'219px'
    }
}))

const Align = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    [theme.breakpoints.down(700)]:{
        display:'block',
        marginTop:'20px',
        alignItems:'center',

    }
}))

const AlignField1 = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    [theme.breakpoints.down(700)]:{
        display:'block'
    }
}))

const Btn = styled(Button)(({theme})=>({
    
    background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
    borderRadius: '40px',
    marginTop:'2rem',
    color: '#343045',
    width: '214px',
    height: '48px',
    [theme.breakpoints.down(700)]:{
        display:'flex',
        margin:'0 auto'
    }
}))



const Form = () =>{
    return(
    <MainBox>
        <Box>
        <Align>
        <H1>JOIN HYDRA</H1>
        </Align>
        <Align>
            <Text>Let’s Build Your VR Experience</Text>
        </Align>
        </Box>
        <AlignField1>
         <Field fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
         <Field fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
         </AlignField1>
         <AlignField1>
         <Field fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
         <Field fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
         </AlignField1>
         <Align sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
         <Field1 fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
         </Align>
         <Align sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
         <Field2 fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
         </Align>
        <Align>
            <Btn>JOIN HYDRA</Btn>
        </Align>
    </MainBox>
)}

export default Form;