import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 160px auto;
  padding: 160px 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    margin: 10% 0 17%;
    padding: 8% 5% 95px;
    overflow: hidden;
  }
`;

const MobileSubContent = styled.div`
  width: 20%;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 6px 6px;
  position: relative;
  background: #f4f4f4;
  border-radius: 3vw;
  box-shadow: -2.5vw 5vh 58px 6px rgb(0 0 0 / 16%);
  @media (max-width: 768px) {
    padding: 6px 6px;
  }
`;

const MobileMainContent = styled.div`
  width: 23%;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 6px 6px;
  position: relative;
  background: #f4f4f4;
  border-radius: 3vw;
  box-shadow: -2.5vw 5vh 58px 6px rgb(0 0 0 / 16%);
  @media (max-width: 768px) {
    padding: 6px 6px;
  }
`;

const InnerContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 216.98%;
`;

const PopolMobileViewContent = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "#e6e6e6" }}>
      <MainContainer>
        <MobileSubContent>
          <InnerContent></InnerContent>
        </MobileSubContent>
        <MobileMainContent>
          <InnerContent></InnerContent>
        </MobileMainContent>
        <MobileSubContent>
          <InnerContent></InnerContent>
        </MobileSubContent>
      </MainContainer>
    </div>
  );
};

export default PopolMobileViewContent;
