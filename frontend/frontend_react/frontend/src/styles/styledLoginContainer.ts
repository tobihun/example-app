import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledLoginContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));