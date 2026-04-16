import type { NextPage } from "next";
import { useState } from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import projects from "../components/library/projects";

/* ── 풀스크린 컨테이너 ── */
const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0a0a0a;
`;

/* ── 배경 이미지 레이어 ── */
const BgLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const BgImage = styled.div<{ active: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.6s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
  }
`;

/* ── 프로젝트 텍스트 트랙 (가로 스크롤) ── */
const TextTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 80px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const ProjectItem = styled.a<{ active: boolean }>`
  flex-shrink: 0;
  padding: 28px 48px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid
    ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.5)" : "transparent"};

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 20px 28px;
  }
`;

const ItemCategory = styled.span`
  display: block;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 8px;
`;

const ItemClient = styled.span<{ active: boolean }>`
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ active }) =>
    active ? "#fff" : "rgba(255, 255, 255, 0.35)"};
  white-space: nowrap;
  transition: color 0.3s ease;
  line-height: 1.2;

  ${ProjectItem}:hover & {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ItemType = styled.span`
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 6px;
`;

/* ── 하단 정보 바 ── */
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;

  @media (max-width: 768px) {
    padding: 20px 24px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const MoreLink = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const PageIndicator = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  font-family: monospace;
  letter-spacing: 0.05em;

  span {
    color: #fff;
  }
`;

/* ── 프로그레스 바 ── */
const ProgressWrap = styled.div`
  position: absolute;
  bottom: 72px;
  left: 48px;
  right: 48px;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 3;

  @media (max-width: 768px) {
    left: 24px;
    right: 24px;
    bottom: 80px;
  }
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: rgba(255, 255, 255, 0.5);
  transition: width 0.3s ease;
`;

/* ── 스크롤 힌트 ── */
const ScrollHint = styled.div`
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 20px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Home: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = projects.length;

  return (
    <>
      <Seo title="Pluton | Digital Experience Studio" />

      <PageWrapper>
        {/* 배경 이미지 - 호버된 프로젝트의 이미지 표시 */}
        <BgLayer>
          {projects.map((project, idx) => (
            <BgImage key={project.id} active={idx === activeIndex}>
              <Image
                src={project.thumbnail}
                layout="fill"
                objectFit="cover"
                alt=""
                priority={idx < 2}
                loading={idx < 2 ? undefined : "lazy"}
              />
            </BgImage>
          ))}
        </BgLayer>

        {/* 프로젝트 텍스트 가로 트랙 */}
        <TextTrack>
          {projects.map((project, idx) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <ProjectItem
                active={idx === activeIndex}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <ItemCategory>CASE STUDY</ItemCategory>
                <ItemClient active={idx === activeIndex}>
                  {project.client}
                </ItemClient>
                <ItemType>{project.category}</ItemType>
              </ProjectItem>
            </Link>
          ))}
        </TextTrack>

        {/* 프로그레스 */}
        <ProgressWrap>
          <ProgressFill
            progress={((activeIndex + 1) / count) * 100}
          />
        </ProgressWrap>

        {/* 하단 바 */}
        <BottomBar>
          <BottomLeft>
            <PageIndicator>
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              {" / "}
              {String(count).padStart(2, "0")}
            </PageIndicator>
          </BottomLeft>
        </BottomBar>

        <ScrollHint>SCROLL TO EXPLORE</ScrollHint>
      </PageWrapper>
    </>
  );
};

export default Home;
