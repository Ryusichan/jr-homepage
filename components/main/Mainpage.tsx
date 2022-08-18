import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const TextComponent = styled(Stack)``;
const ImgComponent = styled(Stack)`
  position: relative;
  flex: 1.5;
  min-height: 440px;
`;

const Homebg = styled.span`
  background: url("/images/home-bg.svg");
  position: absolute;
  right: 0;
  top: 0;
  width: 700px;
  height: 700px;
  background-size: cover;
  z-index: -1;
`;

const Mainpage = () => {
  return (
    <Stack direction={"row"} spacing={6} alignItems="center">
      <TextComponent spacing={4} sx={{ flex: 1 }}>
        <Typography variant="h2" component="h1" sx={{ wordBreak: "keep-all" }}>
          당신의 시작을 함께 <span style={{ color: "#7162D7" }}>Design</span>{" "}
          하겠습니다.
        </Typography>
        <Typography variant="body1" component="h6">
          고객의 맞춤형 웹사이트를 기획부터 디자인, 제작, 배포까지 고객과 함께
          제작해 드립니다.
        </Typography>
        <Button
          style={{ maxWidth: "210px", minHeight: "48px" }}
          variant="contained"
        >
          Contact Us
        </Button>
      </TextComponent>
      <ImgComponent>
        <Image
          src="/images/svg-image/img_mainimg.svg"
          // width={500}
          // height={397}
          layout="fill"
          objectFit="contain"
          alt="name"
        />
      </ImgComponent>
      <Homebg />
    </Stack>
  );
};

export default Mainpage;
