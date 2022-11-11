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
  margin-top: 4rem;
  margin-bottom: 4rem;
  /* @media (max-width: 900px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  } */
`;

const PopolContent = ({ children }: Props) => {
  return (
    <ContainerOutterBox>
      <ContainerBox maxWidth="lg">{children}</ContainerBox>
    </ContainerOutterBox>
  );
};

export default PopolContent;
