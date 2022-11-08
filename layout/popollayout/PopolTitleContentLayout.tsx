import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  logo: string;
  title1: string;
  title2: string;
  subtitle: string;
}

const ContainerStack = styled(Stack)``;

const TitleUI = styled(Typography)``;

const SubtitleUI = styled(Typography)``;

const PopolTitleLayout = ({ logo, title1, title2, subtitle }: Props) => {
  return (
    <>
      <ContainerStack spacing={4}>
        <Image src={logo} alt="logo" width={140} height={54} layout="fixed" />
        <TitleUI variant="h2" color="#fff">
          {title1}
          <br />
          {title2}
        </TitleUI>
        <SubtitleUI variant="h6" color="#fff">
          {subtitle}
        </SubtitleUI>
      </ContainerStack>
    </>
  );
};

export default PopolTitleLayout;
