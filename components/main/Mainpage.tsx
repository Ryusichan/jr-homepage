import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const TextComponent = styled(Stack)``;
const ImgComponent = styled(Stack)``;

const Mainpage = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <TextComponent spacing={2}>
        <Typography variant="h1" component="h1">
          당신의 시작을 함께 <span style={{ color: "#7162D7" }}>Design</span>{" "}
          하겠습니다.
        </Typography>
        <Typography variant="body2" component="h6">
          고객의 맞춤형 웹사이트를 기획부터 디자인, 제작, 배포까지 고객과 함께
          제작해 드립니다.
        </Typography>
        <Button variant="contained">Contact Us</Button>
      </TextComponent>
      <ImgComponent>
        <Image
          src="/images/gotalk_main.png"
          width={364}
          height={397}
          alt="name"
        />
      </ImgComponent>
    </Stack>
  );
};

export default Mainpage;
