import React from "react";
import { Box, Dialog, Modal } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { useRef } from "react";

interface Props {
  openModal: boolean;
  handleClose: () => void;
  name: string;
  imageSrc: string;
}

const ImageContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  width: calc(100% - 120px);
  max-width: 1000px;
  @media (max-width: 415px) {
    width: calc(100% - 24px);
  }
`;

const ImageBox = styled(Box)`
  width: 100%;
  position: relative;
  & > span {
    position: unset !important;
    img {
      height: auto !important;
      position: relative !important;
    }
  }
`;

const ProgressAnimation = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 50%;

  margin-left: -21px;
  margin-top: -21px;
  border-radius: 50%;

  border: 4px solid #9575cd;
  border-top-color: transparent;
  border-left-color: transparent;

  animation: Rotate 0.8s infinite linear;
  z-index: 100;

  @keyframes Rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const DialogModal = ({ openModal, handleClose, name, imageSrc }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ImageContainer>
        <ImageBox>
          <Image
            src={imageSrc}
            // width={400}
            // height={400}
            layout="fill"
            alt={name}
            // objectFit="contain"
            // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
            onLoadingComplete={() => ref.current?.remove()}
          />
          <ProgressAnimation ref={ref} />
        </ImageBox>
      </ImageContainer>
    </Modal>
  );
};

export default DialogModal;
