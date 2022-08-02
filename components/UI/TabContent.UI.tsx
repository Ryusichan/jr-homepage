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
  }
`;

const ComponentUI = ({ innerText, imgUrl }: Props) => {
  return (
    <ContainerBox direction={"row"} alignItems="center">
      <Box>{innerText}</Box>
      <Image src={imgUrl} width={450} height={450} alt="name" />
    </ContainerBox>
  );
};

export default ComponentUI;
