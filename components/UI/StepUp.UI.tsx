import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
  primary: string;
  secondary: string;
  third?: string;
}

const ContainerBox = styled(Container)`
  padding: 2rem 0;
`;

const StepUpUI = ({ primary, secondary, third }: Props) => {
  return (
    <Stack sx={{ backgroundColor: "#E5F2FF" }}>
      <ContainerBox maxWidth="lg">
        <Stack alignItems={"center"} spacing={2} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h4"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            {primary}
          </Typography>
          <Typography
            variant="body2"
            component="h6"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            {secondary}
            <br />
            {third}
          </Typography>
        </Stack>
      </ContainerBox>
    </Stack>
  );
};

export default StepUpUI;
