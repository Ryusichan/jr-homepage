import React from "react";
import Seo from "../components/Seo";
import ComponentUI from "../components/UI/Component.UI";
import StepUpUI from "../components/UI/StepUp.UI";
import WhyContentUI from "../components/UI/WhyContentUI";
import WhyContentPage from "../components/whypluton/WhyContentPage";
import Whypage from "../components/whypluton/Whypage";

const whypluton = () => {
  return (
    <>
      <Seo title="WhyPluton | Pluton" />
      <ComponentUI>
        <Whypage />
      </ComponentUI>

      {/* ProgremInfo */}
      <StepUpUI
        primary="보다 빠르고 보다 웹 최적화된 서비스를 제공받을수 있습니다."
        secondary="JR Studio는 React, Next JS, Material UI, Typescript 등 웹최적화를 위한"
        third="다양한 최신화기술을 바탕으로 고객님의 WEB을 더 완벽하게 만들어 드립니다."
      />

      {/* whyContent */}
      <WhyContentPage />
    </>
  );
};

export default whypluton;
