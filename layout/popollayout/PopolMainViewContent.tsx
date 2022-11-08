import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 160px auto;
  padding: 160px 0;
`;

const PcContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 40px 40px;
  position: relative;
  background: #f4f4f4;
  border-radius: 28px;
  :after {
    content: "";
    display: block;
    width: 532px;
    height: 167px;
    position: absolute;
    bottom: -167px;
    left: 50%;
    margin-left: -266px;
    background: url("/images/image-res/project-video-pc.png") no-repeat;
  }
`;

const InnerContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
`;

const BgContent = styled.div`
  width: 100%;
  height: 645px;
  position: absolute;
  top: 0;
  left: 0;
  background: #d5ccbd no-repeat center center;
  background-size: cover;
`;

const PopolMainViewContent = () => {
  return (
    <div>
      <MainContainer>
        <BgContent />
        <PcContent>
          <InnerContent></InnerContent>
        </PcContent>
      </MainContainer>
    </div>
  );
};

export default PopolMainViewContent;
