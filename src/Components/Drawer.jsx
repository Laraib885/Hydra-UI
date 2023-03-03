import React,{useState} from "react";
import { Drawer, IconButton, ListItemButton,List,ListItemIcon,ListItemText } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";


const DrawerComp = () => {
  const [open, setOpen] = useState(false)

  return(
    <>
      <Drawer PaperProps={{
        sx:{backgroundColor:'#302c42'}
      }} open={open} onClose={()=>setOpen(false)}>
        <List>
          <ListItemButton onClick={()=>setOpen(true)} divider>
            <ListItemIcon sx={{display:'flex',flexDirection:'column'}}>
              <ListItemText sx={{color:'#FFFFFF'}}>ABOUT</ListItemText>
              <ListItemText sx={{color:'#FFFFFF'}}>SERVICES</ListItemText>
              <ListItemText sx={{color:'#FFFFFF'}}>TECHNOLOGIES</ListItemText>
              <ListItemText sx={{color:'#FFFFFF'}}>HOW TO</ListItemText>

            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{marginLeft:'auto',color:'#FFFFF'}} onClick={()=>setOpen(!open)}>
        <MenuRounded/>
      </IconButton>
    </>
  )
}

export default DrawerComp;