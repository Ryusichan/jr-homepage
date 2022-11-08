import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  subText: string;
  children: React.ReactNode;
}

const ContainerStack = styled(Stack)``;

const LogoUI = styled.img``;

const TitleUI = styled(Typography)``;

const SubtitleUI = styled(Typography)``;

const SubTextUI = styled(Typography)``;

const PopolContentLayout = ({ title, subTitle, subText, children }: Props) => {
  return (
    <>
      <ContainerStack>
        <TitleUI>{title}</TitleUI>
        <SubtitleUI>{subTitle}</SubtitleUI>
        <SubTextUI>{subText}</SubTextUI>
        {children}
      </ContainerStack>
    </>
  );
};

export default PopolContentLayout;
