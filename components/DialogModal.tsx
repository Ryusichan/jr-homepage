import React from "react";
import { Box, Dialog, Modal } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  openModal: boolean;
  handleClose: () => void;
  name: string;
  imageSrc: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const ImageBox = styled(Box)`
  width: 800px;
  height: 569px;
  @media (max-width: 1000px) {
    width: 600px;
    height: 427px;
  }
  @media (max-width: 600px) {
    width: 400px;
    height: 284px;
  }
  @media (max-width: 415px) {
    width: 300px;
    height: 213px;
  }
`;

const DialogModal = ({ openModal, handleClose, name, imageSrc }: Props) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ImageBox>
          <Image
            src={imageSrc}
            // width={400}
            // height={400}
            layout="fill"
            alt={name}
            objectFit="contain"
            // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageBox>
      </Box>
    </Modal>
  );
};

export default DialogModal;
