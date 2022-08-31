import {
  BrandingWatermark,
  Brush,
  Collections,
  DashboardCustomize,
  Devices,
  Dns,
  ManageSearch,
  Menu,
  PhoneInTalk,
  Settings,
  Timeline,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ArrayProps } from "../whypluton/WhyContentPage";

const WhyContainer = styled(Stack)`
  margin: 6rem 24px;
  align-items: center;
  > div:nth-child(1) {
    flex: 1;
    margin: 0 4rem;
  }
  @media (max-width: 900px) {
    margin: 6rem 0;
    flex-direction: column-reverse;
    > div:nth-child(1) {
      margin: 0;
    }
  }
`;
const WhyTextContent = styled(Stack)`
  > :nth-child(1) {
    font-size: 36px;
    font-weight: 500;
  }
  > :nth-child(2) {
    font-size: 14px;
    font-weight: 500;
  }
`;
const WhyItem = styled(Stack)`
  flex-direction: row;
  > :nth-child(2) {
    flex: 1;
  }
`;

const WhyInnerItem = styled(Stack)`
  > :nth-child(1) {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  > :nth-child(2) {
    font-size: 14px;
  }
`;

const ImageBox = styled(Box)`
  width: 500px;
  height: 450px;
  overflow: hidden;
  position: relative;
  margin: 1rem;
  @media (max-width: 900px) {
    width: 300px;
    height: 272px;
  }
`;

const IconAvatar = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: #e4ebf1;
  color: #637381;
  margin-right: 20px;
  > * {
    width: 32px;
    height: 32px;
  }
`;

const WhyContentUI = ({
  title,
  subTitle,
  firstContent,
  secondContent,
  thirdContent,
  forthContent,
  whyImage,
  direction,
}: ArrayProps) => {
  const iconFinder = (icon: string) => {
    switch (icon) {
      case "phone":
        return <PhoneInTalk />;
      case "timeline":
        return <Timeline />;
      case "brush":
        return <Brush />;
      case "custom":
        return <DashboardCustomize />;
      case "collect":
        return <Collections />;
      case "settings":
        return <Settings />;
      case "devices":
        return <Devices />;
      case "ManageSearch":
        return <ManageSearch />;
      case "Dns":
        return <Dns />;
      case "BrandingWatermark":
        return <BrandingWatermark />;
      default:
        return <Menu />;
    }
  };

  const directionProps = direction === "left" ? "row" : "row-reverse";

  return (
    <WhyContainer direction={directionProps}>
      <WhyTextContent
        spacing={4}
        data-aos={direction == "left" ? "fade-right" : "fade-left"}
        data-aos-delay="200"
      >
        <Typography>{title}</Typography>
        <Typography>{subTitle}</Typography>
        <WhyItem data-aos="zoom-out-up" data-aos-delay="400">
          <IconAvatar>{iconFinder(firstContent.icon)}</IconAvatar>
          <WhyInnerItem>
            <Typography>{firstContent.title}</Typography>
            <Typography>{firstContent.content}</Typography>
          </WhyInnerItem>
        </WhyItem>
        <WhyItem data-aos="zoom-out-up" data-aos-delay="600">
          <IconAvatar>{iconFinder(secondContent.icon)}</IconAvatar>
          <WhyInnerItem>
            <Typography>{secondContent.title}</Typography>
            <Typography>{secondContent.content}</Typography>
          </WhyInnerItem>
        </WhyItem>
        {thirdContent && (
          <WhyItem data-aos="zoom-out-up" data-aos-delay="800">
            <IconAvatar>{iconFinder(thirdContent.icon)}</IconAvatar>
            <WhyInnerItem>
              <Typography>{thirdContent.title}</Typography>
              <Typography>{thirdContent.content}</Typography>
            </WhyInnerItem>
          </WhyItem>
        )}
        {forthContent && (
          <WhyItem data-aos="zoom-out-up" data-aos-delay="1000">
            <IconAvatar>{iconFinder(forthContent.icon)}</IconAvatar>
            <WhyInnerItem>
              <Typography>{forthContent.title}</Typography>
              <Typography>{forthContent.content}</Typography>
            </WhyInnerItem>
          </WhyItem>
        )}
      </WhyTextContent>
      <ImageBox
        data-aos={direction == "left" ? "fade-left" : "fade-right"}
        data-aos-delay="200"
      >
        <Image src={whyImage} alt="why" layout={"fill"} />
      </ImageBox>
    </WhyContainer>
  );
};

export default WhyContentUI;
