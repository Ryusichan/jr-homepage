import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const TextComponent = styled(Stack)``;
const ImgComponent = styled(Stack)``;

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
        <Typography variant="body2" component="h6">
          웹 최적화를 위한 최신 기술을 바탕으로 고객님이 원하는 WEB에 더
          다가갈수 있습니다.
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
          src="/images/svg-image/img_whymain.svg"
          width={500}
          height={397}
          alt="name"
        />
      </ImgComponent>
    </Stack>
  );
};

export default Whypage;
