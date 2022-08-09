import React, { useEffect } from "react";

import { Box, Button, Container, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import Seo from "../components/Seo";
import {
  BrandingWatermark,
  Brush,
  Category,
  CloudDownload,
  DashboardCustomize,
  Devices,
  Dns,
  ManageSearch,
  Settings,
  Timeline,
  Widgets,
} from "@mui/icons-material";

const PriceDetailContent = styled(Grid)``;

const PringContainer = styled.div`
  background: #f6f6f8;
  display: flex;
  flex-direction: column;
  > div {
    max-width: 1500px;
    position: relative;
    min-width: 320px;
    margin: 150px auto 100px;
    padding: 0 30px;
    min-height: 565px;
  }
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: center;
  margin-bottom: 4rem;
`;

const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > div:nth-child(1) {
    font-size: 50px;
    color: #3f4f5e;
    font-weight: 700;
  }
  > div:nth-child(2) {
    margin: 10px 0 0;
    font-size: 24px;
    color: #6caad3;
    font-weight: 500;
  }
`;

const ContentBox = styled(Grid)`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  flex: 1;
  display: flex;
`;

const IconAvatar = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e4ebf1;
  color: #637381;
  margin-right: 20px;
  > * {
    width: 32px;
    height: 32px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentTitle = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
  color: #323232;
`;

const ContentText = styled.div`
  font-size: 14px;
  color: #969696;
`;

const PricingDetail = styled.div`
  background-color: #e9e9f1;
  padding: 52px 74px;
  margin-top: 100px;
`;

const PricingDetailTitle = styled.div`
  font-size: 24px;
  margin-bottom: 44px;
  font-weight: bold;
`;

const PricingSubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 24px;
`;

const PricingDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const PricingContent = styled.div`
  font-size: 20px;
  margin-bottom: 16px;
  color: #969696;
`;

const PricingPaper = styled(Paper)`
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 3px 12px rgb(0 0 0 / 16%);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PriceHead = styled.div`
  margin-bottom: 22px;
  padding-bottom: 28px;
  border-bottom: 1px solid #c8c8c8;
  > div:nth-child(1) {
    font-size: 22px;
    margin-bottom: 28px;
    font-weight: 700;
  }
  > div:nth-child(2) {
    font-size: 36px;
    font-weight: 700;
  }
`;

const PriceBody = styled.div`
  font-size: 12px;
  color: #969696;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PriceFooter = styled(Box)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #969696;
`;

const PriceAction = styled.div`
  margin-top: auto;
`;

const PriceCaption = styled.div`
  width: 100%;
  background: #cfdbe3;
  padding: 4px 60px;
  color: #646464;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  margin: 4rem 0;
`;

const Pricing = () => {
  const gradePrice = [
    {
      grade: "Basic",
      price: "800,000원",
      description: "단일 페이지 제공",
      date: "20일",
      editCount: "2회",
    },
    {
      grade: "Primium",
      price: "1,800,000원",
      description: "6페이지(메인1종 & 서브5종)",
      date: "30일",
      editCount: "3회",
    },
    {
      grade: "Enterprise",
      price: "3,400,000원",
      description: "16페이지(메인1종 & 서브 15종)",
      date: "40일",
      editCount: "4회",
    },
    {
      grade: "Business",
      price: "가격문의",
      description: "20페이지 이상",
      date: "상담후 협의",
      editCount: "상담후 협의",
    },
  ];

  const serviceFunction = [
    {
      icon: <Timeline />,
      title: "Wire Frame",
      info1: "고객님과의 상담을 바탕으로 WEB 설계 Wire Frame을 제공합니다.",
    },
    {
      icon: <Category />,
      title: "차별화된 디자인",
      info1: "단순한 Templet이 아닌 고객만을 위한 맞춤형 디자인이 제공됩니다.",
    },
    {
      icon: <Brush />,
      title: "Art Work",
      info1: "전문 Art Derector가 메인, 서브 이미지등을 직접 제작해 드립니다.",
    },

    {
      icon: <Widgets />,
      title: "Material UI",
      info1:
        "Google의 UI플랫폼 Material UI로 제작됩니다. 세련된 디자인 UI를 느낄수 있습니다.",
    },

    {
      icon: <Devices />,
      title: "반응형 웹사이트",
      info1:
        "PC, 노트북, Mobile, Tablet등 다양한 장치의 크기에 따라 변경되는 WEB을 만듭니다.",
    },
    {
      icon: <DashboardCustomize />,
      title: "사용자 맞춤형 제작",
      info1:
        "배너, 모달, Tab, Snackbar등 다양한 기술을 바탕으로 고객님의 요구조건을 반영합니다.",
    },
  ];

  const serviceSkill = [
    {
      icon: <ManageSearch />,
      title: "SEO 최적화",
      info1:
        "고객님의 WEB이 네이버, 구글등 검색에 노출될수있게 SEO를 최적화 해드립니다.",
    },
    {
      icon: <Settings />,
      title: "Design System",
      info1:
        "상담을 바탕으로 진행된 Design을 시스템화 하여 동일한 Design 폼을 유지합니다.",
    },
    {
      icon: <MenuIcon />,
      title: "React + Next JS",
      info1:
        "최적화된 WEB APP으로 제작합니다 불필요한 데이터 소모없이 WEB을 접속할수 있습니다.",
    },

    {
      icon: <Dns />,
      title: "최적화된 서버",
      info1: "고객님의 상황에 맞는 가장 최적화된 서버를 제공해드립니다.",
    },

    {
      icon: <BrandingWatermark />,
      title: "Component 구조화",
      info1:
        "최적화된 Compoent로 제작하기 때문에 이용자가 불필요한 DATA 소모가 없습니다.",
    },
    {
      icon: <CloudDownload />,
      title: "SSR 방식의 WEB",
      info1:
        "서버에서 유저에게 보여줄 페이지를 모두 구성하여 유저에게 보여주는 방식을 사용합니다.",
    },
  ];

  return (
    <>
      <Seo title="Pricing" />
      <PringContainer>
        {/* <PageTitle title="Price" /> */}
        <Container maxWidth="xl">
          <AboutHeader>
            <AboutTitle>
              <div>Pricing Plan</div>
              <div>
                SMS 전송 한 번으로 고객과의 영상 상담을 시작할 수 있습니다.
              </div>
            </AboutTitle>
          </AboutHeader>
          <div>
            <Grid container spacing={4}>
              {gradePrice.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    key={`${item.grade}_${index}`}
                  >
                    <PricingPaper>
                      <PriceHead>
                        <div>{item.grade}</div>
                        <div>{item.price}</div>

                        <div>{item.description}</div>
                      </PriceHead>

                      <PriceBody>
                        <div>웹앱 기획, 디자인, 개발</div>
                        <div>- 서비스 메인 웹앱</div>
                        <div>- SEO 최적화 세팅</div>
                        <div>- component 웹구조 제공</div>
                        <div> (페이지 이동시 새로고침 없는 최적화)</div>
                        <div>
                          - 다양한 View 맞춤형 반응형 웹(웹, 모바일 + 타블렛)
                        </div>
                      </PriceBody>

                      <PriceFooter>
                        <div>작업일 : {item.date}</div>
                        <div>수정횟수 : {item.editCount}</div>
                      </PriceFooter>
                      <PriceAction>
                        <Button fullWidth variant="outlined" onClick={() => {}}>
                          진행 하기
                        </Button>
                      </PriceAction>
                    </PricingPaper>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div>
            <div>
              <PriceCaption>Pluton의 특징</PriceCaption>
              <PriceDetailContent container spacing={6}>
                {serviceFunction.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ContentBox>
                      <IconAvatar>{item.icon}</IconAvatar>
                      <TextBox>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentText>{item.info1}</ContentText>
                      </TextBox>
                    </ContentBox>
                  </Grid>
                ))}
              </PriceDetailContent>
            </div>
            <div>
              <PriceCaption>Pluton의 기술</PriceCaption>
              <PriceDetailContent container spacing={6}>
                {serviceSkill.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ContentBox>
                      <IconAvatar>{item.icon}</IconAvatar>
                      <TextBox>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentText>{item.info1}</ContentText>
                      </TextBox>
                    </ContentBox>
                  </Grid>
                ))}
              </PriceDetailContent>
            </div>
          </div>
        </Container>
      </PringContainer>
      <Footer />
    </>
  );
};

export default Pricing;
