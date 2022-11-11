import React from "react";
import PopolContent from "../../../components/UI/PopolContent.UI";
import PopolStyleContent from "../../../components/UI/PopolStyleContent.UI";
import PopolTitle from "../../../components/UI/PopolTitle.UI";
import PopolContentLayout from "../../../layout/popollayout/PopolContentLayout";
import PopolTitleLayout from "../../../layout/popollayout/PopolTitleContentLayout";
import bgUrl from "images/portfolio/website/wizeschoolbg.jpg";
import PopolDateLayout from "../../../layout/popollayout/PopolDateLayout";
import PopolMainViewContent from "../../../layout/popollayout/PopolMainViewContent";
import PopolInsideContent from "../../../layout/popollayout/PopolInsideContent";
import PopolMobileViewContent from "../../../layout/popollayout/PopolMobileViewContent";
import PopolWebViewContent from "../../../layout/popollayout/PopolWebViewContent";

const wizeschool = () => {
  return (
    <>
      {/* 메인 bg이미지 첨부 */}
      <PopolTitle
        bgUrl={"/images/image-res/popol-res/wizeschool/popolmain.jpg"}
      >
        {/* 메인 타이틀 입력 */}
        <PopolTitleLayout
          logo="/images/image-res/popol-res/wizeschool/wizeschool-logo.svg"
          title1="영재 발굴 전문학원,"
          title2="유레카영재학원 홈페이지 제작"
          subtitle="WEB / Mobile / SEO"
        />
      </PopolTitle>
      <PopolContent>
        {/* 제작 info 입력 */}
        <PopolDateLayout
          title="유레카영재학원 홈페이지 제작"
          client="유레카영재학원"
          date="2018"
          progress="반응형웹, 일러스트레이션, SEO"
          description={{
            item1: "유레카영재학원 홈페이지 제작",
            item2: "직관적인 UI/UX를 적용하여 사용자의 편의성을 높였습니다.",
            item3:
              "웹 환경은 사용자의 다양한 디바이스 환경을 고려해 반응형 웹으로 구현하였습니다.",
          }}
        />
      </PopolContent>
      {/* 메인 웹뷰 사진 입력 */}
      <PopolMainViewContent />

      {/* 웹뷰 소개하는 컨텐스 */}
      <PopolContent>
        <PopolInsideContent
          title="유용하며 의미있는 유레카영재학원의 특징을 담은 디자인"
          innerText="사용자의 편의성을 고려하려 직관적이고 보편적인 개념을 사용하였습니다. 유레카영재학원의 BI를 적극적으로 활용하여 다양한 콘텐츠에 녹여냈습니다."
        />
      </PopolContent>

      {/* 웹뷰 이미지 넣기 */}
      <PopolWebViewContent
        bgImage={"/images/image-res/popol-res/wizeschool/wize-web.jpg"}
      />

      {/* 모바일뷰를 소개하는 컨텐스 */}
      <PopolContent>
        <PopolInsideContent
          title="사용자 환경에 맞춰 최적화되는 반응형웹"
          innerText="다양한 디바이스와 해상도에 맞게 최적화되는 반응형웹으로 개발하여
          여러 환경의 사용자에게 동일한 사용자경험을 제공하며, 사이트의 유지관리 효율성을 높였고
          검색엔진에 친화적이게 제작되었습니다."
        />
      </PopolContent>

      {/* 모바일 뷰 이미지 넣기 */}
      <PopolMobileViewContent />

      {/* 스타일 소개하는 컨텐스 */}
      <PopolContent>
        <PopolInsideContent
          title="유용하며 의미있는 유레카영재학원의 특징을 담은 디자인"
          innerText="사용자의 편의성을 고려하려 직관적이고 보편적인 개념을 사용하였습니다. 유레카영재학원의 BI를 적극적으로 활용하여 다양한 콘텐츠에 녹여냈습니다."
        />
      </PopolContent>

      <PopolStyleContent
        bgImage={"/images/image-res/popol-res/wizeschool/wize-color.jpg"}
      />
    </>
  );
};

export default wizeschool;
