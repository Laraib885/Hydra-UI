import { Typography,Box } from "@mui/material";
import{styled}  from "@mui/material";


// export const BoxLeft = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down(600)]: {
//     },
//     [theme.breakpoints.down(800)]:{
      
//     }
//   }));



export const H1 = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
    color: '#FFFFFF',
    [theme.breakpoints.down(600)]:{
        textAlign: "center",
    }
}))

export const SubHeading = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '36px',
    lineHeight: '44px',
    color: '#FFFFFF',
    [theme.breakpoints.down(600)]:{
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
[theme.breakpoints.down(600)]:{
    display:'none'
}

}))


