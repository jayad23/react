import React, {Fragment} from 'react'
import { styled } from "@mui/material/styles";
import {Box} from '@mui/material';

const CustomBox = styled(Box)`
  width: 200px;
  height: 200px;
  border: 10px solid purple;

`;

const StyledBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  border: "10px solid orange",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  }
}))

const AStyled = () => {
  return (
    <CustomBox>Estilizados SC</CustomBox>
    // <Fragment>
      
    //   <StyledBox>Estilizados MUi</StyledBox>
    // </Fragment>
  )
}

export default AStyled