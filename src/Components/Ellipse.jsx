import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography,Box } from "@mui/material";
import {styled} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";

const Digit = styled(Typography)(({theme})=>({
  width: '69px',
  height: '78px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '64px',
  lineHeight: '78px',
  color: '#343045',
  // marginLeft:'2rem'
  display:'flex',
  alignItems:'center',
  justifyContent:'space-around'
}))

const Circle = styled(Box)(({theme})=>({
  width: '159px',
  height: '159px',
  borderRadius:'50%',
  display:'flex',
  flexDirection:'inherit',
  // marginLeft:'1rem',
  direction:'flex',
  alignItems:'center',
  justifyContent:'space-around',
background: 'linear-gradient(251.27deg, #C0B7E8 12.87%, #8176AF 89.33%)',
border:'10px solid black'
}))

const Text = styled(Typography)(({theme})=>({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '29px',

  color: '#FFFFFF',
}))


const Align = styled(Box)(({theme})=>({
  marginTop:'6rem',
  display:"flex",
  justifyContent:'space-around'
}))


const Ellipse = () =>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
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


<Box>
<Align><Circle><Digit>O1</Digit></Circle>

</Align>
<Align sx={{justifyContent:'center'}}>
      <ArrowForward fontSize="large" style={{ color: deepPurple[500] }}/>
  <Text>3D Conception
& Design</Text>
</Align>

</Box>


<Box>
<Align><Circle><Digit>O2</Digit></Circle>

</Align>
<Align sx={{justifyContent:'center'}}>
      <ArrowForward fontSize="large" style={{ color: deepPurple[500] }}/>
  <Text>Interaction Design</Text>
</Align>

</Box>

<Box>
<Align><Circle><Digit>O3</Digit></Circle>

</Align>
<Align sx={{justifyContent:'center'}}>
      <ArrowForward fontSize="large" style={{ color: deepPurple[500] }}/>
  <Text>VR World User Testing</Text>
</Align>

</Box>

<Box>
<Align><Circle><Digit>O4</Digit></Circle>

</Align>
<Align sx={{justifyContent:'center'}}>
      <ArrowForward fontSize="large" style={{ color: deepPurple[500] }}/>
  <Text>Hydra VR Deploy</Text>
</Align>

</Box>
  
</Carousel>
)}

export default Ellipse;