import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto';

export const theme = createTheme({
    palette: {
      primary: {
        main: "#0a9396",
      },
      secondary: {
        main: "#c4ffeb",
        light: "#ffffff"
      },
    },
    typography: {
      fontFamily: "Roboto"
    }
  });