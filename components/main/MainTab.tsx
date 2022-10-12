import React from "react";
// import SwipeableViews from "react-swipeable-views";
import { Box, Stack, SvgIcon, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import TabContentUI from "../UI/TabContent.UI";
import styled from "styled-components";

const TabContentbg = styled.span`
  background: url("/images/svg-image/left-bg-decor.svg");
  position: absolute;
  left: -9rem;
  top: 6rem;
  width: 466px;
  height: 991px;
  background-size: cover;
  z-index: -1;
  @media (max-width: 900px) {
    width: 400px;
    height: 850px;
    left: -16rem;
    top: -6rem;
  }
  @media (max-width: 415px) {
    width: 200px;
    height: 425px;
    left: -3rem;
    top: 4rem;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ImportTabIcon = (icon: string) => {
  return (
    <Image
      src={`/images/icons/ic_${icon}.svg`}
      width={58}
      height={58}
      alt={icon}
    />
  );
};

const tabArray = [
  { label: "상담", icon: ImportTabIcon("counsel") },
  { label: "기획", icon: ImportTabIcon("planning") },
  { label: "디자인", icon: ImportTabIcon("design") },
  { label: "제작", icon: ImportTabIcon("develop") },
  { label: "배포", icon: ImportTabIcon("deploy") },
];

const tabContentArray = [
  {
    innerTitle: "고객과의 상담이 진행됩니다.",
    innerText: `프로젝트 크기를 협의하여 기간, 비용 등을 계산하여 알려드립니다. 
    현업에서 10년 넘게 종사 중인 프로젝트 매니저가 
    맞춤형 상담으로 원하시는 웹을 정확히 찾아드립니다.`,
    imgUrl: "/images/svg-image/img_tabcontent01.svg",
  },
  {
    innerTitle: "상담 내용을 시각화합니다.",
    innerText:
      "상담한 내용을 바탕으로 제작된 웹 구조화를 wire-frame으로 받아 보실 수 있습니다. 이후 지속적인 소통을 통해 디자인의 방향성을 결정합니다.",
    imgUrl: "/images/svg-image/img_tabcontent02.svg",
  },
  {
    innerTitle: "웹을 디자인합니다.",
    innerText:
      "협의된 wire-frame을 기반으로 현업에서 10년 이상 종사 중인 전문 디자이너의 디자인이 진행됩니다.",
    imgUrl: "/images/svg-image/img_tabcontent03.svg",
  },
  {
    innerTitle: "디자인된 작업을 코드화 합니다.",
    innerText:
      "UI Engineer가 다양한 프로그래밍 언어(React, TypeScript, Node.js, Material UI)를 이용하여 최적화된 웹을 제작해 드립니다.",
    imgUrl: "/images/svg-image/img_tabcontent04.svg",
  },
  {
    innerTitle: "제작 완료된 제품을 Web에 배포합니다.",
    innerText:
      "지금까지의 작업에 맞는 서버를 제공해 웹에 업로드하는 작업입니다. 10MB까지 무료로 제공됩니다. 최적화된 웹이 제공되며 로딩 속도가 다른 제작 업체에 비해 400% 빠르게 진행되는 것을 확인하실 수 있습니다.",
    imgUrl: "/images/svg-image/img_tabcontent05.svg",
  },
];

const TabContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        variant="fullWidth"
        sx={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          "& > div > div": {
            justifyContent: "space-between",
            marginBottom: "1rem",
          },
        }}
      >
        {tabArray.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            value={index}
            sx={{
              backgroundColor: `${index === value ? "#7162D7" : undefined}`,
              color: `${index === value ? "#fff!important" : undefined}`,
              borderRadius: "18px",
              padding: { xs: "8px", lg: "24px" },
              minWidth: { xs: "68px", lg: "auto" },
              maxWidth: "128px",
              "& > span": {
                marginBottom: "12px!important",
                width: { xs: "40px!important", sm: "initial!important" },
                height: { xs: "40px!important", sm: "initial!important" },
              },
            }}
            data-aos="zoom-out-up"
            data-aos-delay={`${index * 2}00`}
          />
        ))}
      </Tabs>
      {/* <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ maxWidth: "1030px", margin: "0 auto" }}
      > */}
      {tabContentArray.map((tabContent, index) => {
        const { innerTitle, innerText, imgUrl } = tabContent;
        let chgInnerText = innerText.replace(/\r\n/gi, "<br>");

        return (
          <TabPanel key={index} value={value} index={index}>
            <TabContentUI
              innerTitle={innerTitle}
              innerText={chgInnerText}
              imgUrl={imgUrl}
            />
          </TabPanel>
        );
      })}
      {/* </SwipeableViews> */}
    </Stack>
  );
};

const MainTab = () => {
  return (
    <Stack id="progress">
      <TabContentbg />
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ mt: 4, mb: 8 }}
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        서비스 제공절차
      </Typography>

      {TabContainer()}
    </Stack>
  );
};

export default MainTab;
