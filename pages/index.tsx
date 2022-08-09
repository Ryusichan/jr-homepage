import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { Link } from "react-scroll";
import Mainpage from "../components/main/Mainpage";
import ComponentUI from "../components/UI/Component.UI";
import StepUpUI from "../components/UI/StepUp.UI";
import MainTab from "../components/main/MainTab";
import MainResponsiveGallery from "../components/main/MainResponsiveGallery";

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
        primary="고객님 만을 위한 맞춤형 웹앱 사이트를 제작해드립니다."
        secondary="많은 업체들이 짜여진 Templet 에 붙여넣기 하여 웹을 제작합니다"
        third="저희는 고객님과의 상담을 바탕으로 철저히 고객님만을 위한 맞춤형 웹을
        제공합니다"
      />

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
