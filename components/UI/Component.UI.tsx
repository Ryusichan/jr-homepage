import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContainerBox = styled(Container)`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ComponentUI = ({ children }: Props) => {
  return <ContainerBox maxWidth="lg">{children}</ContainerBox>;
};

export default ComponentUI;
