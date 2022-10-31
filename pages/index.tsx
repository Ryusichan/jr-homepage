import type { NextPage } from "next";
import Seo from "../components/Seo";
import Mainpage from "../components/main/Mainpage";
import ComponentUI from "../components/UI/Component.UI";
import StepUpUI from "../components/UI/StepUp.UI";
import MainTab from "../components/main/MainTab";
import MainResponsiveGallery from "../components/main/MainResponsiveGallery";
import OptimizePluton from "../components/main/OptimizePluton";
import Project from "../components/main/Project";

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Home | RYU" />
      {/* topcontainer   */}
      <ComponentUI>
        <Mainpage />
      </ComponentUI>

      {/* ProgremInfo */}
      <StepUpUI
        primary="디자인을 전공한 개발자 입니다."
        secondary="두 직군에 종사한적있는 경험을 바탕으로 대화 비용을 최소화 할수있고"
        third="최적의 서비스를 제공할수있습니다."
      />

      {/* optimize */}
      {/* {
        <ComponentUI>
          <OptimizePluton />
        </ComponentUI>
      } */}

      {/* Project */}
      <ComponentUI>
        <MainTab />
      </ComponentUI>

      {/* Portfolio */}
      <ComponentUI>
        <Project />
      </ComponentUI>

      {/* ServiceProgrem */}
      <ComponentUI>
        <MainResponsiveGallery />
      </ComponentUI>
    </>
  );
};

export default Home;
