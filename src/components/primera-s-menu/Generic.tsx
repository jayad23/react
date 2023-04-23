import React, {Fragment} from 'react'
import {CardMedia, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {ExpandLess, ExpandMore } from '@mui/icons-material';
import { ModalPicture } from './ModalPicture';

interface elementProps {
  id: number;
  label: string;
  text: string;
  imageUrl: Array<string>;
  isVideo?: boolean;
};

export const Generic = ({ information, subHeader }: { information: Array<elementProps>; subHeader: string}) => {

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {subHeader}
        </ListSubheader>
      }
    >
      {
        information.map((element: elementProps) => (
          <Steps key={element.id} {...element} />
        ))
      }
    </List>
  )
}


const Steps = ({ label, text, imageUrl, isVideo }: elementProps) => {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [picture, setPicture] = React.useState("");

  const handleOpenModal = (url: string) => {
    setPicture(url);
    setOpenModal(true);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          { open ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />}
        </ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {
          isVideo ? (
            <List component="div" disablePadding sx={{ paddingLeft: { xs: "0px", sm: "70px", md: "70px", lg: "70px"}}}>
              <ListItemText primary={text} />
              {
                imageUrl.map((url:string, idx: number) => (
                  <CardMedia
                    key={idx} 
                    component="iframe" 
                    src={url}
                    sx={{ width: { xs: "500px", md: "600px"}, height: { xs: "320px", md: "380px"}, objectFit: "contain" ,mb: 1}}
                  />
                ))
              }
            </List>
          ):(
            <List component="div" disablePadding sx={{ paddingLeft: { xs: "0px", sm: "70px", md: "70px", lg: "70px"}}}>
              <ListItemText primary={text} />
              {
                imageUrl.map((url:string, idx: number) => (
                  <CardMedia
                    key={idx} 
                    component="img" 
                    image={url}
                    sx={{ width: "500px", mb: 1, cursor: "pointer"}}
                    onClick={() => handleOpenModal(url)}
                  />
                ))
              }
            </List>
          )
        }
        { openModal && (<ModalPicture open={openModal} setOpen={setOpenModal} imageUrl={picture}/>)}
      </Collapse>
    </Fragment>
  )
};