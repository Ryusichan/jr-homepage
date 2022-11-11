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
  width: 50%;
  padding-top: 50%;
  position: relative;
  overflow: hidden;
  float: left;
  :hover {
    & > div:nth-child(2) {
      opacity: 1;
      background-color: rgba(11, 33, 238, 0.85);
    }
    & > div:nth-child(3) {
      opacity: 0.15;
    }
  }
`;

const CustomBox = styled(Stack)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 2rem;
  color: #ffffff;
  opacity: 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
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

const CustomButton = styled(Button)`
  width: 100%;
  background-color: unset;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;
  border-radius: 0px;
  padding: 1rem 4rem;
  transition: 0.32s;
  :hover {
    background-color: unset;
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Contentbg = styled.span<any>`
  background: url(${(props) => props.bgUrl});
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  @media (max-width: 900px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 415px) {
    width: 350px;
    height: 350px;
  }
`;

const MainTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  transition: 0.3s;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const PopolArray = [
  {
    url: "/images/popol-bg/content00.png",
    main: "LYFT",
    title: "LYFT 관리자 화면",
    subcontent01: "LYFT 쇼핑몰 서비스관리자 화면",
    subcontent02: "CLOUD형 관리자 화면",
    subcontent03: "AWS EC2, RDS, S3, CloudFront, Route53",
    link: "https://admin-dashboard-eta-five.vercel.app/",
  },
  {
    url: "/images/popol-bg/content01.png",
    main: "제이웍",
    title: "제이웍 관리자 화면",
    subcontent01: "CLOUD형 관리자 화면",
    subcontent02: "AWS EC2, RDS, S3, CloudFront, Route53",
    subcontent03: "디자인 시스템적용",
    link: "https://tranquil-taiyaki-aa5a83.netlify.app/dashboard/app",
  },
  {
    url: "/images/popol-bg/content02.png",
    main: "GOTALK",
    title: "Gotalk",
    subcontent01: "WEB RTC 기반 대화형 영상 플랫폼",
    subcontent02: "AWS 클라우드형 서버 구축",
    subcontent03: "Redux 를 활용한 State 관리",
    link: "https://www.gotalk.to",
  },
  {
    url: "/images/popol-bg/content03.png",
    main: "Videohelp.me",
    title: "Videohelpme",
    subcontent01: "WEB RTC 기반 대화형 영상 플랫폼",
    subcontent02: "AWS 클라우드형 서버 구축",
    subcontent03: "디자인 시스템적용",
    link: "https://www.videohelp.me",
  },
  {
    url: "/images/popol-bg/content04.png",
    main: "DEVELOPER RANKING",
    title: "Developer Ranking",
    subcontent01: "개발자들의 Github 정보를 기반으로 랭킹을 제공하는 서비스",
    subcontent02: "랭킹을 기반으로 개발언어의 트랜드를 이해",
    subcontent03: "stackoverflow에서 데이터 송신 차트로 변환",
    link: "https://develop-ranking.vercel.app/",
  },
  {
    url: "/images/popol-bg/content05.png",
    main: "RYU",
    title: "THREE.JS 기반 3D 모델링",
    subcontent01: "Three JS, web GL 학습을 위한 클론코딩",
    subcontent02: "GSAP와 scrolltrigger의 사용으로 scroll Three에 적용하기",
    subcontent03: "Vite를 사용하여 빠른 제작환경 구성",
    link: "https://myhome-portfolio.vercel.app/",
  },
  {
    url: "/images/popol-bg/content06.png",
    main: "GALAXY",
    title: "Galaxy 프로젝트",
    subcontent01: "Three JS 기반의 3D Galaxy 모델링",
    subcontent02: "은하계 각 행성간 크기와 거리를 비교하여 표현",
    subcontent03: "Vite를 사용하여 빠른 제작환경 구성",
    link: "https://three-galaxy-lake.vercel.app/",
  },
  {
    url: "/images/popol-bg/content07.png",
    main: "MENTOR",
    title: "멘토 관리자 화면",
    subcontent01: "멘토 회사판매관리자 화면",
    subcontent02: "CLOUD형 관리자 화면",
    subcontent03: "AWS EC2, RDS, S3, CloudFront, Route53",
    link: "https://mentor-dashboard-navy.vercel.app/",
  },
];

const TabContainer = () => {
  return (
    <>
      <div>
        {PopolArray.map((item, index) => (
          <ContainerBox alignItems="center" key={`${index}_container`}>
            <Contentbg bgUrl={item.url} />
            <CustomBox spacing={8}>
              <Typography variant="h3" component="h2">
                {item.title}
              </Typography>
              <Stack>
                <Typography variant="body1" component="p">
                  - {item.subcontent01}
                </Typography>
                <Typography variant="body1" component="p">
                  - {item.subcontent02}
                </Typography>
                <Typography variant="body1" component="p">
                  - {item.subcontent03}
                </Typography>
              </Stack>
              <Link href={item.link}>
                <a target="_blank">
                  <CustomButton variant="contained">
                    서비스 바로가기
                  </CustomButton>
                </a>
              </Link>
            </CustomBox>
            <MainTitle>{item.main}</MainTitle>
          </ContainerBox>
        ))}
      </div>
    </>
  );
};

const Project = () => {
  return (
    // <Stack id="progress">
    <Stack id="project">
      {/* <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ mt: 4, mb: 8 }}
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        Project
      </Typography> */}

      {TabContainer()}
    </Stack>
  );
};

export default Project;
