import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  bgImage: string;
}

const ContainerOutterBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: 44vw;
  max-height: 600px;
  margin: 4rem auto;
`;

const PopolContent = ({ bgImage }: Props) => {
  return (
    <ContainerOutterBox>
      <ImageContainer>
        <Image
          src={bgImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="background"
        />
      </ImageContainer>
    </ContainerOutterBox>
  );
};

export default PopolContent;
