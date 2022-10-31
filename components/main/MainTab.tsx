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
  { label: "대화", icon: ImportTabIcon("counsel") },
  { label: "아이디어", icon: ImportTabIcon("planning") },
  { label: "코드 최적화", icon: ImportTabIcon("develop") },
  { label: "시스템화", icon: ImportTabIcon("deploy") },
  // { label: "배포", icon: ImportTabIcon("deploy") },
];

const tabContentArray = [
  {
    innerTitle: "다양한 팀원과 대화를 나누며 아이디어를 공유할 수 있습니다.",
    innerText: `IT서비스에 종사해오며 고객, 기획자, 디자이너, 개발자, 프로젝트매니저 등 다양한 직군의 사람들과 대화하며
    최적의 서비스를 만들어 나가는데 최선을 다해왔습니다.`,
    imgUrl: "/images/svg-image/img_tabcontent01.svg",
  },
  {
    innerTitle: "제품의 시각적 완성도를 위한 아이디어를 가지고 있습니다.",
    innerText:
      "6년간 일해온 디자이너의 경험을 바탕으로 고객이 원하는 요소를 정확히 파악하고, 디자이너와 협의하여 좋은 완섬품을 만들 수 있습니다.",
    imgUrl: "/images/svg-image/img_tabcontent02.svg",
  },
  {
    innerTitle: "코드를 최적화 하여 서비스를 가볍게만듭니다.",
    innerText:
      "코드 작업시에 처음 접근하는 사람이더라도 이해하기 쉬운 코드를 만드려고 노력하여왔습니다. 또한 아토믹 디자인을 지향하며 재사용 가능한 컴포넌트, 하나의 역할을 수행하는 컴포넌트를 위해 노력하여왔습니다.",
    imgUrl: "/images/svg-image/img_tabcontent04.svg",
  },
  {
    innerTitle: "디자인 시스템 제작",
    innerText:
      "작업 진행시 작업한 내용을 시스템화 시켜서 다른 팀원들과 공유하고, 재사용성을 높이기 위해 노력하였습니다.",
    imgUrl: "/images/svg-image/img_tabcontent05.svg",
  },
  // {
  //   innerTitle: "제작 완료된 제품을 Web에 배포합니다.",
  //   innerText:
  //     "지금까지의 작업에 맞는 서버를 제공해 웹에 업로드하는 작업입니다. 10MB까지 무료로 제공됩니다. 최적화된 웹이 제공되며 로딩 속도가 다른 제작 업체에 비해 400% 빠르게 진행되는 것을 확인하실 수 있습니다.",
  //   imgUrl: "/images/svg-image/img_tabcontent05.svg",
  // },
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
    // <Stack id="progress">
    <Stack id="myinfo">
      <TabContentbg />
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ mt: 4, mb: 8 }}
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        ADVANTAGE
      </Typography>

      {TabContainer()}
    </Stack>
  );
};

export default MainTab;
