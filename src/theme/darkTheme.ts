import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1250,
      xl: 2036
    }
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#B71375"
    },
    secondary: {
      main: "#088395"
    },
    background: {
      default: "#393646"
    }
  },
})