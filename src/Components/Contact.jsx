import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";
import {styled} from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { deepPurple } from "@mui/material/colors";

const H1 = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: 700,
fontSize: '24px',
lineHeight: '29px',

color:'#FFFFFF',
}))

const Align = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  marginTop:'6rem',
  // marginRight:"6rem",
  justifyContent:'center'
}))

const Para = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
/* identical to box height */


color: '#FFFFFF',

}))

const Contact = () =>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          // slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          // slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
<Carousel
  // alignItems={'center'}
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
   ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop","mobile"]} 
  dotListClass="custom-dot-list-style"
  // itemClass="carousel-item-padding-40-px"
>
  
  
   <Align>
    <Box>
    <AddLocationIcon fontSize="large" style={{ color: deepPurple[500] }}/>
    </Box>
    <Box>
    <H1>Pay Us a Visit</H1>
    <Para>Union St, Seattle, WA 98101, United States</Para>
    </Box>
  </Align> 

   <Align>
    <Box>
    <PhoneInTalkIcon fontSize="large" style={{ color: deepPurple[500] }}/>
    </Box>
    <Box>
    <H1>Give Us a Call</H1>
    <Para>(110) 1111-1010</Para>
    </Box>
  </Align> 

   <Align>
    <Box>
    <MailOutlineIcon fontSize="large" style={{ color: deepPurple[500] }}/>
    </Box>
    <Box>
    <H1>Send Us a Message</H1>
    <Para>Contact@HydraVTech.com</Para>
    </Box>
  </Align> 
  


    
  

</Carousel>
)}

export default Contact;