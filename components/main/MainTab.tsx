import React from "react";
// import SwipeableViews from "react-swipeable-views";
import { Box, Stack, SvgIcon, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import TabContentUI from "../UI/TabContent.UI";

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
    innerTitle: "고객님과의 상담이 진행됩니다.",
    innerText: `고객님과의 상담이 진행됩니다 프로젝트 크기를 협의하여 기간 비용등을 계산하여 알려드립니다.
      현업에서 10년넘게 종사중인 프로젝트 매니저가 고객님의 맞춤형 상담으로 고객님이 원하시는 Web 을 찾아드립니다.`,
    imgUrl: "/images/svg-image/img_tabcontent01.svg",
  },
  {
    innerTitle: "상담한 내용을 기획합니다.",
    innerText:
      "상담한 내용을 바탕으로 웹 구조화를 wire-frame으로 받아볼수 있습니다. 받은 내용을 바탕으로 고객님과 소통하며 Design 방향성을 결정합니다.",
    imgUrl: "/images/svg-image/img_tabcontent02.svg",
  },
  {
    innerTitle: "고객님의 웹을 디자인합니다.",
    innerText:
      "협의한 wire-frame 을 바탕으로 현업에서 10년 넘게 종사중인 전문 디자이너의 디자인이 진행됩니다.",
    imgUrl: "/images/svg-image/img_tabcontent03.svg",
  },
  {
    innerTitle: "디자인된 작업을 코드화 합니다.",
    innerText:
      "디자인을 바탕으로 UI Enginire 가 웹 최적화를 위한 React, Typescript, Node js, Material UI 를 이용하여 최적화된 web 을 제작해 드립니다.",
    imgUrl: "/images/svg-image/img_tabcontent04.svg",
  },
  {
    innerTitle: "제작완료된 제품을 WEB에 배포합니다.",
    innerText:
      "최적화된 web을 바탕으로 web에 build하는 작업입니다. 고객님의 web에 맞춤형 서버를 제공합니다. 10MB까진 무료로 제공됩니다. web 로딩속도가 타 제작업체에 400% 빠르게 build되는걸 확인할수 있습니다.",
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
              maxWidth: "128px",
              "& > span": {
                marginBottom: "1rem!important",
                width: { xs: "40px!important", sm: "initial!important" },
                height: { xs: "40px!important", sm: "initial!important" },
              },
            }}
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
