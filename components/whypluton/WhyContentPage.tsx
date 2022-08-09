import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import WhyContentUI from "../UI/WhyContentUI";

export interface ArrayProps {
  title: string;
  subTitle: string;
  firstContent: { icon: string; title: string; content: string };
  secondContent: { icon: string; title: string; content: string };
  thirdContent?: { icon: string; title: string; content: string };
  forthContent?: { icon: string; title: string; content: string };
  whyImage: string;
  direction: "left" | "right";
}

const WhyContainer = styled(Container)``;

const whyContentArray: ArrayProps[] = [
  {
    title: "Plan",
    subTitle:
      "현재 많은 업체들이 WEB 제작을 진행할때 단순히 Template 복사 붙여넣기로만 웹을 구성하는 작업을 합니다 저희는 그렇게 제작하지 않습니다 고객과 상담후 WEB의 기초 설계를 튼튼히 작업하고 디자인 완료의 과정까지 고객과 철저한 소통으로 고객과 함께 WEB을 만들어갑니다.",
    firstContent: {
      icon: "phone",
      title: "친절한 상담",
      content:
        "고객님과 상담을 진행하며 고객님이 원하는 WEB을 같이 찾아갑니다.",
    },
    secondContent: {
      icon: "timeline",
      title: "Wire Frame",
      content:
        "고객님과의 상담내용을 바탕으로 설계를 하는 작업입니다. WEB을 제작할때 고객님과의 소통을 할수 있는 공간입니다.",
    },
    whyImage: "/images/image-res/whycontent01.png",
    direction: "left",
  },
  {
    title: "Design",
    subTitle:
      "현재 많은 업체들이 WEB 제작을 진행할때 단순히 Template 복사 붙여넣기로만",
    firstContent: {
      icon: "brush",
      title: "Art Work",
      content:
        "고객에게 얼마나 효과적으로 이미지를 전달하느냐 중요합니다. 전문 Art Derector가 당신의 WEB에서 필요한 이미지들을 직접 제작해드립니다.",
    },
    secondContent: {
      icon: "custom",
      title: "Web Design",
      content:
        "기업의 색과 현재 Trend에 맞는 WEB을 Designing합니다. 타업체의 템플릿 복사 붙여넣기와는 전혀다른 Trendy 한 Design 을 받아 보실수 있으십니다. 디자인전공의 10년차 현직 디자이너가 Design 합니다.",
    },
    thirdContent: {
      icon: "collect",
      title: "이미지 최적화",
      content:
        "저희 기업이 가지고있는 노하우로 WEB에 올라가는 이미지를 같은 해상도를 유지하며 80% 절감된 Data로 만듭니다. 이는 Web을 열거나 페이지 넘기는 속도를 향상시킵니다.",
    },
    whyImage: "/images/image-res/whycontent02.png",
    direction: "right",
  },
  {
    title: "Develop",
    subTitle:
      "WEB은 어떻게 구성하느냐가 중요합니다 대부분의 업체들이 한 요소에 모든 요소를 전부 넣어서 하나의 변경사항으로도 전체 페이지가 새로 고침되는 방식을 이용하여 모든 Data를 다시 가져오는 최적화 되지못한 방식을 이용하고 있습니다. 저희는 모든요소를 Component 화 하여 불필요한 DATA 소모 없이 WEB을 Mobile APP처럼 쾌적하게 사용가능하게 만듭니다.",
    firstContent: {
      icon: "settings",
      title: "Design System",
      content:
        "Design 을 System화 시키는 방식입니다. 고객님의 다양한 페이지는 제각각 다른형태로 보여지면 일률적인 Design이 진행되지 않아 전혀 다른 WEB에 접속한 느낌을 주게 됩니다. 고객님과 협의한 Design을 System화 시켜서 다양한 Page 에 고객님만의 색을 입힐수 있게 합니다.",
    },
    secondContent: {
      icon: "devices",
      title: "Media Query",
      content:
        "PC, Mobile, Tablet 까지 다양한 Device에 반응형 Media Query가 적용됩니다. 고객님께서는 다양한 기기에서 작동하는 Web을 받으실수 있습니다.",
    },
    thirdContent: {
      icon: "",
      title: "Material UI",
      content:
        "현재 가장 세련된 UI 로 주목받는 Material UI를 활용해 제작합니다. 고객님은 버튼 클릭 효과 하나까지 세심하게 Design 됩니다.",
    },
    forthContent: {
      icon: "",
      title: "React + Next JS",
      content:
        "모든 요소를 각 Component화 시켜서 각각의 요소를 세분화 시키고 필요할때 불러오는 구조로 구성하여 WEB을 Mobile APP 처럼 쾌적하게 사용이 가능합니다.",
    },
    whyImage: "/images/image-res/whycontent03.png",
    direction: "left",
  },
  {
    title: "Deploy",
    subTitle: "WEB에 업로드 하는 작업입니다.",
    firstContent: {
      icon: "ManageSearch",
      title: "SEO 최적화",
      content:
        "NEXT JS 로 REACT의 단점을 보완해 SEO 최적화를 제공합니다 고객님의 WEB 은 NAVER, GOOGLE등 검색포털싸이트에 쉽게 노출될수있습니다.",
    },
    secondContent: {
      icon: "Dns",
      title: "호스팅 1년 무료 제공",
      content:
        "어떤 호스팅 업체가 더 저렴한지 우리기업에 맞는 호스팅 서버는 어떤 것인지 트래픽은 몇기가를 이용해야 하는지등 고민없이 고객님의 WEB에 최적화된 호스팅을 1년간 무료로 제공합니다.",
    },
    thirdContent: {
      icon: "BrandingWatermark",
      title: "SSR 방식의 웹사이트",
      content:
        "저희는 SSR방식을 사용하여 문서를 구조화합니다 그럼으로 문서를 불러들이는데 큰 데이터 소모가 들지 않고 빠르게 웹사이트를 소비자화면으로 보여질수 있습니다.",
    },
    whyImage: "/images/image-res/whycontent04.png",
    direction: "right",
  },
];

const WhyContentPage = () => {
  return (
    <WhyContainer maxWidth="lg">
      {whyContentArray.map((whyContent, index) => (
        <WhyContentUI
          key={index}
          title={whyContent.title}
          subTitle={whyContent.subTitle}
          firstContent={whyContent.firstContent}
          secondContent={whyContent.secondContent}
          thirdContent={whyContent.thirdContent}
          forthContent={whyContent.forthContent}
          whyImage={whyContent.whyImage}
          direction={whyContent.direction}
        />
      ))}
    </WhyContainer>
  );
};

export default WhyContentPage;
