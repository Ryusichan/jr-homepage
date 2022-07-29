import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContainerBox = styled(Container)`
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

const ComponentUI = ({ children }: Props) => {
  return <ContainerBox maxWidth="lg">{children}</ContainerBox>;
};

export default ComponentUI;
