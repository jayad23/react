import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {CardMedia} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: { xs: "100%", md: "1000px"},
  height: { xs: "auto", md: "620px"},
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  overflow: "scroll",
  '::-webkit-scrollbar': {
    display: "none"
  },
  p: 1,
  borderRadius: "5px",
};

interface ModalProps {open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; imageUrl: string };

export const ModalPicture = ({ open, setOpen, imageUrl }:ModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img" 
            image={imageUrl}
            sx={{ width: "100%", mb: 1, cursor: "pointer", objectFit: "cover"}}
            onClick={handleClose}
          />
        </Box>
      </Modal>
  )
}
    