import { Menu } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ArrayProps } from "../whypluton/WhyContentPage";

const WhyContainer = styled(Stack)`
  margin: 6rem 24px;
`;
const WhyTextContent = styled(Stack)``;
const WhyItem = styled(Stack)`
  flex-direction: row;
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
      case "firstIcon":
        return <Menu />;
      case "secondIcon":
        return <Menu />;
      case "thirdIcon":
        return <Menu />;
      default:
        return <Menu />;
    }
  };

  // const whyArray = [
  //   {
  //     icon: firstContent.icon,
  //     title: firstContent.title,
  //     content: firstContent.content,
  //   },
  //   {
  //     icon: secondContent.icon,
  //     title: secondContent.title,
  //     content: secondContent.content,
  //   },
  //   thirdContent && {
  //     icon: thirdContent.icon,
  //     title: thirdContent.title,
  //     content: thirdContent.content,
  //   },
  //   forthContent && {
  //     icon: forthContent.icon,
  //     title: forthContent.title,
  //     content: forthContent.content,
  //   },
  // ];

  // console.log("whyArray", whyArray);
  const directionProps = direction === "left" ? "row" : "row-reverse";

  return (
    <WhyContainer direction={directionProps}>
      <WhyTextContent spacing={4}>
        <Typography>{title}</Typography>
        <Typography>{subTitle}</Typography>
        <WhyItem>
          <IconAvatar>{firstContent.icon}</IconAvatar>
          <Stack>
            <Typography>{firstContent.title}</Typography>
            <Typography>{firstContent.content}</Typography>
          </Stack>
        </WhyItem>
        <WhyItem>
          <IconAvatar>{secondContent.icon}</IconAvatar>
          <Stack>
            <Typography>{secondContent.title}</Typography>
            <Typography>{secondContent.content}</Typography>
          </Stack>
        </WhyItem>
        {thirdContent && (
          <WhyItem>
            <IconAvatar>{thirdContent.icon}</IconAvatar>
            <Stack>
              <Typography>{thirdContent.title}</Typography>
              <Typography>{thirdContent.content}</Typography>
            </Stack>
          </WhyItem>
        )}
        {forthContent && (
          <WhyItem>
            <IconAvatar>{forthContent.icon}</IconAvatar>
            <Stack>
              <Typography>{forthContent.title}</Typography>
              <Typography>{forthContent.content}</Typography>
            </Stack>
          </WhyItem>
        )}
      </WhyTextContent>
      {/* <Image src={whyImage} alt="why" width={600} height={550} /> */}
    </WhyContainer>
  );
};

export default WhyContentUI;
