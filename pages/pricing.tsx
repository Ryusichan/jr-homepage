import React, { useEffect } from "react";

import { Box, Button, Container, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import Footer from "../components/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import Seo from "../components/Seo";

const PriceDetailContent = styled(Grid)``;

const PringContainer = styled.div`
  background: #f6f6f8;
  display: flex;
  flex-direction: column;
  > div {
    max-width: 1500px;
    position: relative;
    max-width: 1000px;
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
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e4ebf1;
  color: #637381;
  margin-right: 20px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentTitle = styled.div`
  font-size: 18px;
  color: #323232;
`;

const ContentText = styled.div`
  font-size: 16px;
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
      icon: <MenuIcon />,
      title: "제작진에 대한 정보",
      info1: "제작진의 이름, 전화번호, 주소, 이메일, 제작진 사진",
      info2: "제작진의 이름, 전화번호, 주소, 이메일, 제작진 사진",
    },
    {
      icon: <MenuIcon />,

      title: "제작진에 대한 정보",
      info1: "제작진의 이름, 전화번호, 주소, 이메일, 제작진 사진",
      info2: "제작진의 이름, 전화번호, 주소, 이메일, 제작진 사진",
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
                          - 다양한 View 맞춤형 반응형 웹(웹, 모바일 + 타블렛)
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
              <PriceCaption>영상 상담 주요 기능</PriceCaption>
              <PriceDetailContent container spacing={6}>
                {serviceFunction.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ContentBox>
                      <IconAvatar>{item.icon}</IconAvatar>
                      <TextBox>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentText>{item.info1}</ContentText>
                        <ContentText>{item.info2}</ContentText>
                      </TextBox>
                    </ContentBox>
                  </Grid>
                ))}
              </PriceDetailContent>
            </div>
            <div>
              <PriceCaption>다양한 관리 기능</PriceCaption>
              <PriceDetailContent container spacing={6}>
                {serviceFunction.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ContentBox>
                      <IconAvatar>{item.icon}</IconAvatar>
                      <TextBox>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentText>{item.info1}</ContentText>
                        <ContentText>{item.info2}</ContentText>
                      </TextBox>
                    </ContentBox>
                  </Grid>
                ))}
              </PriceDetailContent>
            </div>
          </div>
          {/* {intl.locale === "ko" && (
          <PricingDetail>
            <PricingDetailTitle>보안 사고 없는 Videohelp.me</PricingDetailTitle>
            <PricingSubTitle>
              videohelp.me는 영상 서비스 최초로 한국인터넷진흥원(KISA)으로부터
              클라우드 보안인증을 받은 서비스입니다.
            </PricingSubTitle>
            <PricingDetailContent>
              <PricingContent>
                - 분기 별 한국인터넷진흥원에서 사후 관리를 위한 점검을 진행하여
                연 1회 이상 자체 점검을 실시합니다.
              </PricingContent>
              <PricingContent>
                - 보안 대책이 갖춰서 있어 고객사에서 별도의 비용과 인력을 투자할
                필요가 없습니다.
              </PricingContent>
              <PricingContent>
                - 클라우드 SaaS형 서비스로 별도의 설치 없이 이용이 가능합니다.
              </PricingContent>
            </PricingDetailContent>
          </PricingDetail>
        )} */}
        </Container>
      </PringContainer>
      <Footer />
    </>
  );
};

export default Pricing;
