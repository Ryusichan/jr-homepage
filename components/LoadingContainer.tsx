import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingContainer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.2rem",
      }}
    >
      <CircularProgress sx={{ mb: 3, width: "48px", height: "48px" }} />
      접속중입니다...
    </Box>
  );
};

export default LoadingContainer;
