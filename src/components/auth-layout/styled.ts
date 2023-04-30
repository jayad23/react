import {Box, CardMedia} from '@mui/material'
import { styled } from "@mui/material/styles";
export const logo = "https://bcasapp.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fprod-bcas.appspot.com%2Fo%2Fhackabossiso.webp%3Falt%3Dmedia%26token%3D8184b988-5b62-455f-adbd-a3157f5827fb&w=3840&q=75";

export const LoginWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  width: 300px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background: rgba( 255, 255, 255, 0.45 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  //border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Container = styled(Box)`
  width: 100%;
  min-height: 100%;
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg");
`;

export const logoContainer = { display: "flex", justifyContent:"center", mb: 2};