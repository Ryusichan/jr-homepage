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

const Whypage = () => {
  return (
    <Stack direction={"row"} spacing={6}>
      <TextComponent spacing={4} sx={{ flex: 1 }}>
        <Typography variant="h2" component="h1" sx={{ wordBreak: "keep-all" }}>
          Pluton은 최적의 WEB을 구성하기
          <br />
          <span style={{ color: "#7162D7" }}>좋은 능력</span> 을 가지고
          있습니다.
        </Typography>
        <HideImgComponent sx={{ display: { xs: "block", md: "none" } }}>
          <Image
            src="/images/svg-image/img_whymain.svg"
            // width={500}
            // height={397}
            layout="fill"
            objectFit="contain"
            alt="name"
          />
        </HideImgComponent>
        <Typography variant="body2" component="h6">
          웹 최적화를 위한 최신 기술을 바탕으로 고객님이 원하는 WEB에 더
          다가갈수 있습니다.
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
          src="/images/svg-image/img_whymain.svg"
          layout="fill"
          alt="name"
        />
      </ImgComponent>
    </Stack>
  );
};

export default Whypage;
