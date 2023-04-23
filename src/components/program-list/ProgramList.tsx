import React, {Fragment} from 'react'
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {StarBorder} from '@mui/icons-material';

const ProgramList = ({ label, topics }: { label: string; topics: Array<string>}) => {
  const [open, setOpen] = React.useState(false);

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
        { topics.map((topic: string) => (
          <List key={topic} component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={topic} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </Fragment>
  )
}

export default ProgramList