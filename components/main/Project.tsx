import React from "react";
// import SwipeableViews from "react-swipeable-views";
import {
  Box,
  Button,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import TabContentUI from "../UI/TabContent.UI";
import styled from "styled-components";
import Link from "next/link";

const ContainerBox = styled(Stack)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  > div:nth-child(1) {
    flex: 1;
    margin-right: 2rem;
  }
  @media (max-width: 415px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const ImageBox = styled(Box)`
  /* width: 450px;
  height: 450px; */
  overflow: hidden;
  position: relative;
  @media (max-width: 600px) {
    /* width: 300px;
    height: 300px; */
  }
`;

const TabContainer = () => {
  return (
    <>
      <ContainerBox
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }}
      >
        <ImageBox
          sx={{ margin: { xs: "2rem 0", sm: "0" } }}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Image
            src="/images/image-res/gotalk.png"
            alt="name"
            width={450}
            height={360}
          />
        </ImageBox>
        <Box data-aos="fade-left" data-aos-delay="200" sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Gotalk - WEB RTC 기반 대화형 영상 플랫폼
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Material UI 프로젝트 적용
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Material Theme를 활용한 디자인 Form 구축
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Redux 를 활용한 State 관리
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            - SVG Animation
          </Typography>
          <Link href={"https://www.gotalk.to"}>
            <a target="_blank">
              <Button variant="contained">서비스 바로가기</Button>
            </a>
          </Link>
        </Box>
      </ContainerBox>

      <ContainerBox
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }}
      >
        <Box data-aos="fade-right" data-aos-delay="200" sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Videohelpme - WEB RTC 기반 영상 상담서비스
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Recoil, React Querry 를 활용한 State 관리
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Figma Design Kit 제작 참여
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - components 기반의 문서구조 서비스 제작(Atomic Design)
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            - Vite를 적용한 FE 환경 개선
          </Typography>
          <Link href={"https://www.videohelp.me"}>
            <a target="_blank">
              <Button variant="contained">서비스 바로가기</Button>
            </a>
          </Link>
        </Box>

        <ImageBox
          sx={{ margin: { xs: "2rem 0", sm: "0" } }}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Image
            src="/images/image-res/vhm.png"
            alt="name"
            width={450}
            height={360}
          />
        </ImageBox>
      </ContainerBox>

      <ContainerBox
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }}
      >
        <ImageBox
          sx={{ margin: { xs: "2rem 0", sm: "0" } }}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Image
            src="/images/image-res/dashboard.png"
            alt="name"
            width={450}
            height={360}
          />
        </ImageBox>

        <Box data-aos="fade-left" data-aos-delay="200" sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Material Dashboard - Material UI 기반 Admin Dashboard
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Material Theme를 활용한 Design System
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Figma Design Kit 제작 참여
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - components 기반의 문서구조 서비스 제작(Atomic Design)
          </Typography>
          <Link
            href={"https://tranquil-taiyaki-aa5a83.netlify.app/dashboard/app"}
          >
            <a target="_blank">
              <Button variant="contained">서비스 바로가기</Button>
            </a>
          </Link>
        </Box>
      </ContainerBox>

      <ContainerBox
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }}
      >
        <Box data-aos="fade-right" data-aos-delay="200" sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Developer Ranking - 개인 프로젝트
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - 개발자들의 Github 정보를 기반으로 랭킹을 제공하는 서비스
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - 랭킹을 기반으로 개발언어의 트랜드를 보고 앞으로 어떤 언어를
            공부해야할지 판단할 수 있도록 도와주는 서비스
          </Typography>
          <Link href={"https://ryusichan.github.io/develop-ranking/"}>
            <a target="_blank">
              <Button variant="contained">서비스 바로가기</Button>
            </a>
          </Link>
        </Box>

        <ImageBox
          sx={{ margin: { xs: "2rem 0", sm: "0" } }}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Image
            src="/images/image-res/ranking.png"
            alt="name"
            width={450}
            height={360}
          />
        </ImageBox>
      </ContainerBox>

      <ContainerBox
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }}
      >
        <ImageBox
          sx={{ margin: { xs: "2rem 0", sm: "0" } }}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Image
            src="/images/image-res/gallaxy.png"
            alt="name"
            width={450}
            height={360}
          />
        </ImageBox>

        <Box data-aos="fade-right" data-aos-delay="200" sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Galaxy - 개인 프로젝트
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Three JS 기반의 3D Galaxy 모델링
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - React Three Fiber를 활용한 3D Galaxy 모델링
          </Typography>
          <Link href={"https://ryusichan.github.io/three-galaxy/"}>
            <a target="_blank">
              <Button variant="contained">서비스 바로가기</Button>
            </a>
          </Link>
        </Box>
      </ContainerBox>

      <ContainerBox
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }}
      >
        <Box data-aos="fade-right" data-aos-delay="200" sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Room - 클론 코딩
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - Three JS, GSAP, React Three Fiber를 활용한 3D Room 모델링
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 1 }}>
            - React Three Fiber를 활용한 3D Galaxy 모델링
          </Typography>
          <Link href={"https://ryusichan.github.io/myhome-portfolio/"}>
            <a target="_blank">
              <Button variant="contained">서비스 바로가기</Button>
            </a>
          </Link>
        </Box>
        <ImageBox
          sx={{ margin: { xs: "2rem 0", sm: "0" } }}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Image
            src="/images/image-res/room.png"
            alt="name"
            width={450}
            height={360}
          />
        </ImageBox>
      </ContainerBox>
    </>
  );
};

const Project = () => {
  return (
    // <Stack id="progress">
    <Stack id="project">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ mt: 4, mb: 8 }}
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        Project
      </Typography>

      {TabContainer()}
    </Stack>
  );
};

export default Project;