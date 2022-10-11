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
      }}
    >
      <CircularProgress sx={{ mb: 2 }} />
      Loading...
    </Box>
  );
};

export default LoadingContainer;
