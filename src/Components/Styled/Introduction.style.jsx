import { Typography,Box } from "@mui/material";
import{styled}  from "@mui/material";


export const MainBox = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between',
    marginTop:'6rem',
    [theme.breakpoints.down(700)]: {
    display:'block'
    },
   
  }));



export const H1 = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
    color: '#FFFFFF',
    [theme.breakpoints.down(700)]:{
        textAlign: "center",
        fontSize: '30px',
    }
}))

export const SubHeading = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '36px',
    lineHeight: '44px',
    color: '#FFFFFF',
    [theme.breakpoints.down(700)]:{
        fontSize:'25px',
        textAlign: "center",
    }
}))






export const Para = styled(Typography)(({theme})=>({



fontFamily: 'Montserrat',
fontStyle: 'normal',
fontweight: 400,
fontsize: '16px',
lineHeight: '20px',

color: '#FFFFFF',
[theme.breakpoints.down(700)]:{
    display:'none'
}

}))


