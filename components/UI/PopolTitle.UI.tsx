import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  bgUrl: string;
  children: React.ReactNode;
}

const ContainerOutterBox = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ContainerBox = styled(Container)`
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
  }
`;

const PopolTitle = ({ bgUrl, children }: Props) => {
  return (
    <ContainerOutterBox
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <ContainerBox maxWidth="lg">{children}</ContainerBox>
    </ContainerOutterBox>
  );
};

export default PopolTitle;
