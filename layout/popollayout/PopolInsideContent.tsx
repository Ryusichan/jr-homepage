import { Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  innerText: string;
}

const PopolInsideContent = ({ title, innerText }: Props) => {
  return (
    <Stack style={{ maxWidth: "700px", margin: "0 auto" }} spacing={4}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">{innerText}</Typography>
    </Stack>
  );
};

export default PopolInsideContent;
