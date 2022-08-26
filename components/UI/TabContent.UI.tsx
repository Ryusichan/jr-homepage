import { Stack, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  innerText: string;
  imgUrl: string;
}

const ContainerBox = styled(Stack)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  > div:nth-child(1) {
    flex: 1;
    margin-right: 2rem;
  }
`;

const ImageBox = styled(Box)`
  width: 450px;
  height: 450px;
  overflow: hidden;
  position: relative;
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

const ComponentUI = ({ innerText, imgUrl }: Props) => {
  return (
    <ContainerBox
      direction={{ xs: "column-reverse", sm: "row" }}
      alignItems="center"
    >
      <Box>{innerText}</Box>
      <ImageBox sx={{ margin: { xs: "2rem 0", sm: "0" } }}>
        <Image src={imgUrl} layout="fill" alt="name" />
      </ImageBox>
    </ContainerBox>
  );
};

export default ComponentUI;
