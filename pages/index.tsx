import type { NextPage } from "next";
import Seo from "../components/Seo";
import Mainpage from "../components/main/Mainpage";
import ComponentUI from "../components/UI/Component.UI";
import StepUpUI from "../components/UI/StepUp.UI";
import MainTab from "../components/main/MainTab";
import MainResponsiveGallery from "../components/main/MainResponsiveGallery";
import OptimizePluton from "../components/main/OptimizePluton";

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
        primary="새로운 "
        secondary="많은 업체들이 이미 구성되어 있는 Templet에 붙여넣기를 하여 웹을 제작합니다."
        third="저희는 지속적인 상담을 바탕으로 철저히 고객만을 위한 맞춤형 웹을 제공합니다."
      />

      {/* optimize */}
      {/* {
        <ComponentUI>
          <OptimizePluton />
        </ComponentUI>
      } */}

      {/* Portfolio */}
      <ComponentUI>
        <MainTab />
      </ComponentUI>

      {/* ServiceProgrem */}
      <ComponentUI>
        <MainResponsiveGallery />
      </ComponentUI>
    </>
  );
};

export default Home;
