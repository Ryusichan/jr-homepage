import React from "react";
// import SwipeableViews from "react-swipeable-views";
import { Box, Stack, SvgIcon, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import TabContentUI from "../UI/TabContent.UI";
import styled from "styled-components";

const ImageContainer = styled.div<{ bgColor: string }>`
  padding: 12px;
  border-radius: 12px;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  overflow: hidden;
  & > span {
    position: unset !important;
    img {
      height: auto !important;
      position: relative !important;
      transition: all 0.3s ease-in-out;
    }
  }
  :hover {
    img {
      scale: 1.1;
    }
  }
  @media (max-width: 415px) {
    padding: 8px;
    border-radius: 8px;
  }
`;

const componentArray = [
  {
    title: "타업체 제작 사이트",
    text: "다른업체의 제작 사이트는 하나의 요소를 클릭할때마다 사이트 전체를 새로고침 합니다.",
    imgUrl:
      "https://pluton-imageres.s3.ap-northeast-2.amazonaws.com/image-res/component-js.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkcwRQIgE%2B3zp25gExKs5Q0FzLNxeFfRFL1s%2FJFePma50HaR96MCIQDIFyYKXHCxlfZ1%2BOKuwDBdATjGRL9xxhpqQ7OKR%2BnAPSrtAgiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5NTY2MTAzODM0OSIMIYqwoVVuXErzwlMBKsECONd637BBIhfMFnnZUwpZuXqNS91T64NJjrOQSlFvA7cGlxA9UWMa0gh2qxIJiGiD%2FR3%2BYBq96cEaomgSI1WM45S3LWWcEjPaJGXKo0%2FjYadR9gwlYsfyrUxUKaLT2Ji5S3cZCpLDJUXRa4YBpIDqAg6GLApFqvbyw93QKW486loGx9S0kJpPTSrHDcFeuCCj1ZjcnY53%2FisHy%2B88bB7K1t802iZzyxZcfZ4jiIOGvGau9%2BFZjyLWfvFcuAS%2FJrDCJqznAx8aRgfM21yuSOmka2e8ErLscQZ6sFe%2F%2B4EVVgNikrvxknZTq4IPF680aObgHmenMRAIj5pQJYRnMq0l1KxqcmeDXp%2FuK6JL6bzioq6Jgu5efdt4%2F1AxrdP7pXbzIY5i3tft5m1iRJatd2FESVD7ZU1ikTKJ2Ft%2FGmoAhTQWML%2FVmZoGOrMCg2pXqpKHmn2mejWtYg3bkHOBfzAQHdpJbrsKZoyrvLgDxUOg0sUxgpu7xSsirH6S7lMjgIQehyc1uDBTUxie4ZMyEnIpJ6QLMqUsstpcBcfZEE0Gg6ivi2ORUL0Ym3dXkUiRK1HoKHMz7acNQ1LNuGI%2FO2im7mCCxTYp24Cef4GJzjZSDrm3h95yEV99bR7R%2B49ymwGqcPw9skO0MF0LA16eGY%2B5bN3YIfY2dAl%2BPZ9mKj1mZfPSGKaF9tbko1DDKUuC9AGg0SD5MbvzaXdc%2FHUQXl1vb7t%2BlhT1o5fIn5CzNYJvULfQA%2BVO8b0MEw9BYy4bGedMkOE9MW6mCk4QDKrtfT5aYdLyhmz21qk4cfPEMQP%2BoQIZ4oe6vuyd4mvUemOEkLcH%2BgupX%2B1N%2Bd2RzTfetw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221012T073346Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAYVMBKEMG5AROCTS2%2F20221012%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=78de28afa9f53a8675f43ba70755983f5475efc13d6ab0f7686b479d673f97c3",
    bgColor: "#d9d9d9",
    anchor: "right",
  },
  {
    title: "플루톤 제작 사이트",
    text: "플루톤은 변경될 요소만 변경되어 가장빠르게 반응할수 있습니다.",
    imgUrl:
      "https://pluton-imageres.s3.ap-northeast-2.amazonaws.com/image-res/component-react.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkcwRQIgE%2B3zp25gExKs5Q0FzLNxeFfRFL1s%2FJFePma50HaR96MCIQDIFyYKXHCxlfZ1%2BOKuwDBdATjGRL9xxhpqQ7OKR%2BnAPSrtAgiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5NTY2MTAzODM0OSIMIYqwoVVuXErzwlMBKsECONd637BBIhfMFnnZUwpZuXqNS91T64NJjrOQSlFvA7cGlxA9UWMa0gh2qxIJiGiD%2FR3%2BYBq96cEaomgSI1WM45S3LWWcEjPaJGXKo0%2FjYadR9gwlYsfyrUxUKaLT2Ji5S3cZCpLDJUXRa4YBpIDqAg6GLApFqvbyw93QKW486loGx9S0kJpPTSrHDcFeuCCj1ZjcnY53%2FisHy%2B88bB7K1t802iZzyxZcfZ4jiIOGvGau9%2BFZjyLWfvFcuAS%2FJrDCJqznAx8aRgfM21yuSOmka2e8ErLscQZ6sFe%2F%2B4EVVgNikrvxknZTq4IPF680aObgHmenMRAIj5pQJYRnMq0l1KxqcmeDXp%2FuK6JL6bzioq6Jgu5efdt4%2F1AxrdP7pXbzIY5i3tft5m1iRJatd2FESVD7ZU1ikTKJ2Ft%2FGmoAhTQWML%2FVmZoGOrMCg2pXqpKHmn2mejWtYg3bkHOBfzAQHdpJbrsKZoyrvLgDxUOg0sUxgpu7xSsirH6S7lMjgIQehyc1uDBTUxie4ZMyEnIpJ6QLMqUsstpcBcfZEE0Gg6ivi2ORUL0Ym3dXkUiRK1HoKHMz7acNQ1LNuGI%2FO2im7mCCxTYp24Cef4GJzjZSDrm3h95yEV99bR7R%2B49ymwGqcPw9skO0MF0LA16eGY%2B5bN3YIfY2dAl%2BPZ9mKj1mZfPSGKaF9tbko1DDKUuC9AGg0SD5MbvzaXdc%2FHUQXl1vb7t%2BlhT1o5fIn5CzNYJvULfQA%2BVO8b0MEw9BYy4bGedMkOE9MW6mCk4QDKrtfT5aYdLyhmz21qk4cfPEMQP%2BoQIZ4oe6vuyd4mvUemOEkLcH%2BgupX%2B1N%2Bd2RzTfetw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221012T072745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYVMBKEMG5AROCTS2%2F20221012%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7934130820488134090f2a4ba0ffa617a6ee43694ff58f97e24ddbab790f86ff",
    bgColor: "#7162d7",
    anchor: "left",
  },
];

const OptimizePluton = () => {
  return (
    <Stack id="optimize">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ mt: 4, mb: 8 }}
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        플루톤의 웹사이트 최적화
      </Typography>

      <Stack direction={"row"} spacing={4} justifyContent={"space-around"}>
        {componentArray.map((item, index) => (
          <Stack sx={{ flex: 1, maxWidth: 450 }} key={`${item.title}`}>
            <Typography
              variant="h5"
              component="h5"
              align="center"
              sx={{ mb: 2 }}
              data-aos={`fade-${item.anchor}`}
              data-aos-delay="200"
            >
              {item.title}
            </Typography>
            <ImageContainer
              bgColor={item.bgColor}
              data-aos={`fade-${item.anchor}`}
              data-aos-delay="300"
            >
              <Image
                layout="fill"
                priority // 빠르게 로딩
                alt={item.title}
                src={item.imgUrl}
              />
            </ImageContainer>
            <Typography
              variant="body1"
              component="p"
              sx={{ mt: 2 }}
              align="center"
              data-aos={`fade-${item.anchor}`}
              data-aos-delay="400"
            >
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OptimizePluton;
