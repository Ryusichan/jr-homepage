import type { NextPage } from "next";
import Seo from "../components/Seo";
import Mainpage from "../components/main/Mainpage";
import ComponentUI from "../components/UI/Component.UI";
import StepUpUI from "../components/UI/StepUp.UI";
import MainTab from "../components/main/MainTab";
import MainResponsiveGallery from "../components/main/MainResponsiveGallery";
import OptimizePluton from "../components/main/OptimizePluton";
import Project from "../components/main/Project";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  max-width: 1400px;
  padding: 0px 16px;
  width: 100%;
  margin: 8rem auto;
`;

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Home | Pluton" />
      {/* topcontainer   */}
      <ComponentUI>
        <Mainpage />
      </ComponentUI>

      {/* ProgremInfo */}
      <StepUpUI
        primary="당신만을 위한 맞춤형 서비스!"
        secondary="많은 업체들이 이미 구성되어 있는 Templet에 붙여넣기를 하여 서비스를 제작합니다."
        third="저희는 지속적인 상담을 바탕으로 철저히 고객만을 위한 맞춤형 서비스를 제공합니다."
      />

      {/* optimize */}
      {/* {
        <ComponentUI>
          <OptimizePluton />
        </ComponentUI>
      } */}

      {/* Portfolio */}
      <PortfolioContainer style={{ maxWidth: "1400px", padding: "0px 16px" }}>
        <Project />
      </PortfolioContainer>

      {/* ServiceProgrem */}
      <ComponentUI>
        <MainResponsiveGallery />
      </ComponentUI>

      {/* Project */}
      <ComponentUI>
        <MainTab />
      </ComponentUI>
    </>
  );
};

export default Home;
