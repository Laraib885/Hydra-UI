import {Button, styled} from "@mui/material";
import {Box,Typography} from "@mui/material";

export const MainBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:'6rem',
    [theme.breakpoints.down(700)]:{
       display:'block'
    }
}))

export const Img = styled(Box)(({theme})=>({
    width:'400px',
    [theme.breakpoints.down(700)]:{
    width:'250px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
    }
}))

export const H1 = styled(Typography)(({theme})=>({
    
fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '36px',
lineHeight: '44px',
color: '#FFFFFF',
[theme.breakpoints.down(700)]:{
    textAlign:'center'
    
    
}
}))


export const H2 = styled(Typography)(({theme})=>({

marginTop:'2rem',
fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: '300',
fontSize: '36px',
lineHeight: '44px',
color: 'rgba(255, 255, 255, 0.95)',

    [theme.breakpoints.down(700)]:{
        textAlign:'center'
    }
}))

export const Para = styled(Typography)(({theme})=>({
    
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'400',
    fontSize:'16px',
    lineHeight:'20px',
    color:"#ffffff",
    marginTop:'2rem',
    [theme.breakpoints.down(700)]:{
        
        fontFamily:'Montserrat',
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'20px',
        lineHeight:'18px',
        color:"#ffffff",
        marginTop:'2rem',
        textAlign:'center'
    }
}))


export const Btn = styled(Button)(({theme})=>({
width: '214px',
height: '48px',

background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
borderRadius: '40px',
fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '12px',
lineHeight: '15px',
color: '#343045',
marginTop:'3rem',
        [theme.breakpoints.down(700)]:{
            display:'flex',
            margin:'0 auto',
            marginTop:'3rem'
        }
}))