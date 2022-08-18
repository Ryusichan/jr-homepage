import React from 'react'
import { Box, Dialog, Modal } from '@mui/material'
import Image from 'next/image'

interface Props{
    openModal: boolean
    handleClose: () => void
    name: string
    imageSrc: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

const DialogModal = ({
    openModal,
    handleClose,
    name,
    imageSrc,
}:Props) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Image
          src={imageSrc}
          width={400}
          height={400}
          alt={name}
          // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          loading="lazy"
        />
      </Box>
    </Modal>
  )
}

export default DialogModal