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
  width: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

const PopolWebViewContent = ({ bgImage }: Props) => {
  return (
    <ContainerOutterBox>
      <ImageContainer>
        <img
          src={require(`${bgImage}`)}

          // src={bgImage}
          // layout="fill"
          // sizes="(max-width: 768px) 100vw,
          //     (max-width: 1200px) 50vw,
          //     33vw"
          // alt="background"
        />
      </ImageContainer>
    </ContainerOutterBox>
  );
};

export default PopolWebViewContent;
