import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContainerBox = styled(Container)`
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

const ComponentUI = ({ children }: Props) => {
  return <ContainerBox maxWidth="sm">{children}</ContainerBox>;
};

export default ComponentUI;
