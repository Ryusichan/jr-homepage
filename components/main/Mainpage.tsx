import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const TextComponent = styled(Stack)``;
const ImgComponent = styled(Stack)`
  position: relative;
  width: 100%;
  flex: 1.5;
  min-height: 440px;
`;

const HideImgComponent = styled(Stack)`
  position: relative;
  width: 100%;
  min-height: 300px;
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
  @media (max-width: 900px) {
    width: 400px;
    height: 400px;
  }
`;

const Mainpage = () => {
  return (
    <Stack direction={"row"} spacing={6} alignItems="center">
      <TextComponent spacing={4} sx={{ flex: 1 }}>
        <Typography variant="h2" component="h1" sx={{ wordBreak: "keep-all" }}>
          당신의 시작을 함께 <span style={{ color: "#7162D7" }}>Design</span>{" "}
          하겠습니다.
        </Typography>
        <HideImgComponent sx={{ display: { xs: "block", md: "none" } }}>
          <Image
            src="/images/svg-image/img_mainimg.svg"
            // width={500}
            // height={397}
            layout="fill"
            objectFit="contain"
            alt="name"
          />
        </HideImgComponent>
        <Typography
          variant="body1"
          component="h6"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          고객의 맞춤형 웹사이트를 기획부터 디자인, 제작, 배포까지 고객과 함께
          제작해 드립니다.
        </Typography>
        <Button
          sx={{
            width: "210px",
            minHeight: "48px",
            "@media (max-width: 900px)": {
              margin: "32px auto 0 auto!important",
            },
          }}
          variant="contained"
        >
          Contact Us
        </Button>
      </TextComponent>
      <ImgComponent sx={{ display: { xs: "none", md: "block" } }}>
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
