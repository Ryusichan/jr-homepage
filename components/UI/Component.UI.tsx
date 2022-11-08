import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContainerOutterBox = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;

const ContainerBox = styled(Container)`
  overflow: hidden;
  margin-top: 8rem;
  margin-bottom: 8rem;
  @media (max-width: 900px) {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

const ComponentUI = ({ children }: Props) => {
  return (
    <ContainerOutterBox>
      <ContainerBox maxWidth="lg">{children}</ContainerBox>
    </ContainerOutterBox>
  );
};

export default ComponentUI;
