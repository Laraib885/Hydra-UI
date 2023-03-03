import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Typography } from "@mui/material";
import {styled} from "@mui/material";
import {Box} from "@mui/material";

const Btn = styled(Button)(({theme})=>({
    width: '154px',
    height: '48px',
    margin:'1rem auto',
    color: '#343045',
    background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',borderRadius: '40px',
    [theme.breakpoints.down(700)]:{
      margin:'1rem auto',
    }
}))

const H1 = styled(Typography)(({theme})=>({
  fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: 700,
fontSize: '24px',
lineHeight: '29px',
display:'flex',
textAlign:'center',
justifyContent:"space-around",
color: '#FFFFFF',
marginTop:'2rem'
}))

const Rectangular = styled(Typography)(({theme})=>({
    width: '310px',
    height: '511px',
    background: 'radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)',
    borderRadius: '40px;#FFFFFF',
    marginTop:'6rem',
}))

const Img = styled(Box)(({theme})=>({
  marginTop:'2rem',
  border:'6px solid black',
  borderRadius:'50%'
  

}))

const Para = styled(Typography)(({theme})=>({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
    display:'flex',
    textAlign:'center',
    marginTop:'2rem',
    color: '#FFFFFF',

}))

const Align = styled(Box)(({theme})=>({
  marginTop:'6rem',
  display:"flex",
  justifyContent:'space-around'
}))

const Service = () =>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min:  464},
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
<Carousel
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
  itemClass="carousel-item-padding-40-px">


      <Align>
    <Rectangular>
        <Box sx={{textAlign:'center'}}>
        <Img component='img' src={require('../Components/Images/1.png')}/>
        <H1>SIMULATION</H1>
        <Para>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae.
        </Para>
        <Btn>TRY IT NOW</Btn>
        </Box>
    </Rectangular>
    </Align>

    <Align>
    <Rectangular>
    <Box sx={{textAlign:'center'}}>
        <Img component='img' src={require('../Components/Images/2.png')}/>
        <H1>EDUCATION</H1>
        <Para>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae.
        </Para>
        <Btn>TRY IT NOW</Btn>
        </Box>
    </Rectangular>
    </Align>

    <Align>
    <Rectangular>
    <Box sx={{textAlign:'center'}}>
        <Img component='img' src={require('../Components/Images/3.png')}/>
        <H1>SELF-CARE</H1>
        <Para>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae.
        </Para>
        <Btn>TRY IT NOW</Btn>
        </Box>
    </Rectangular>
    </Align>

    <Align>
    <Rectangular>
    <Box sx={{textAlign:'center'}}>
        <Img component='img' src={require('../Components/Images/4.png')}/>
        <H1>OUTDOOR</H1>
        <Para>Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae.
        </Para>
        <Box>
        <Btn>TRY IT NOW</Btn>
        </Box>
        </Box>
    </Rectangular>
    </Align>
  
  </Carousel>
)}

export default Service;