import type { NextPage } from "next";
import { useState, useEffect, useRef, useCallback } from "react";
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
  transition: opacity 0.8s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }
`;

/* ── 가로 텍스트 트랙 ── */
const TrackArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const Track = styled.div<{ offset: number }>`
  display: flex;
  align-items: center;
  gap: 24px;
  transform: translateX(${({ offset }) => offset}px);
  transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
`;

/* ── 각 프로젝트 아이템 ── */
const ProjectItem = styled.a<{ showBorder: boolean }>`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 44px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: 260px;
  height: 260px;
  transition: none;

  /* 보더가 그려지는 효과 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* top + bottom 라인 */
  &::before {
    top: 0;
    left: 0;
    width: ${({ showBorder }) => (showBorder ? "100%" : "0")};
    height: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  }

  /* left + right 라인 */
  &::after {
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ showBorder }) => (showBorder ? "100%" : "0")};
    border-left: 1px solid rgba(255, 255, 255, 0.6);
    border-right: 1px solid rgba(255, 255, 255, 0.6);
    transition-delay: 0.1s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
    &::after {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 28px 32px;
    width: 200px;
    height: 200px;
  }
`;

const ItemCategory = styled.span`
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 10px;
`;

const ItemClient = styled.span<{ active: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ active }) => (active ? "#fff" : "rgba(255,255,255,0.2)")};
  white-space: nowrap;
  transition: color 0.4s ease;
  line-height: 1.2;

  ${ProjectItem}:hover & {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ItemType = styled.span<{ active: boolean }>`
  font-size: 0.7rem;
  color: ${({ active }) => (active ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)")};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 8px;
  transition: color 0.4s ease;
`;

const ItemDesc = styled.span<{ active: boolean }>`
  font-size: 0.7rem;
  color: ${({ active }) => (active ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)")};
  margin-top: 14px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;
  transition: color 0.4s ease;

  ${ProjectItem}:hover & {
    color: rgba(255, 255, 255, 0.35);
  }
`;

/* ── 하단 바 ── */
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 48px;

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

const MoreLink = styled.a`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.08em;
  text-decoration: none;
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
    font-size: 0.85rem;
  }
`;

/* ── 프로그레스 바 ── */
const ProgressWrap = styled.div`
  position: absolute;
  bottom: 68px;
  left: 48px;
  right: 48px;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 3;

  @media (max-width: 768px) {
    left: 24px;
    right: 24px;
    bottom: 60px;
  }
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: rgba(255, 255, 255, 0.5);
  transition: width 0.7s cubic-bezier(0.25, 1, 0.5, 1);
`;

/* ── 좌측 프로젝트 정보 ── */
const ActiveInfo = styled.div`
  position: absolute;
  bottom: 110px;
  left: 48px;
  z-index: 3;

  @media (max-width: 768px) {
    left: 24px;
    bottom: 100px;
  }
`;

const ActiveLabel = styled.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 6px;
`;

const ActiveUrl = styled.a`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const Home: NextPage = () => {
  const [scrollIndex, setScrollIndex] = useState(0); // 트랙 위치용
  const [bgIndex, setBgIndex] = useState(0); // 배경 이미지용
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 호버 중인 항목
  const isAnimating = useRef(false);
  const touchStartX = useRef(0);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [offset, setOffset] = useState(0);
  const count = projects.length;

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(count - 1, idx));
      if (clamped === scrollIndex) return;
      if (isAnimating.current) return;
      isAnimating.current = true;
      setScrollIndex(clamped);
      setBgIndex(clamped);
      setTimeout(() => {
        isAnimating.current = false;
      }, 750);
    },
    [scrollIndex, count]
  );

  // 스크롤 인덱스 기반 트랙 오프셋 계산 (화면 가운데 정렬)
  useEffect(() => {
    const el = itemRefs.current[scrollIndex];
    if (!el) return;
    const itemOffset = Array.from(itemRefs.current)
      .slice(0, scrollIndex)
      .reduce((sum, ref) => sum + (ref?.offsetWidth || 0) + 24, 0); // 24 = gap
    const centerOffset = (window.innerWidth - el.offsetWidth) / 2;
    setOffset(-itemOffset + centerOffset);
  }, [scrollIndex]);

  // 휠 이벤트
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;

      if (e.deltaY > 20 || e.deltaX > 20) {
        goTo(scrollIndex + 1);
      } else if (e.deltaY < -20 || e.deltaX < -20) {
        goTo(scrollIndex - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goTo(scrollIndex + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(scrollIndex - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goTo(scrollIndex + 1);
        else goTo(scrollIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollIndex, goTo]);

  const progress = ((bgIndex + 1) / count) * 100;
  const active = projects[bgIndex];

  return (
    <>
      <Seo title="Pluton | Digital Experience Studio" />

      <PageWrapper>
        {/* 배경 이미지 - bgIndex 기반 */}
        <BgLayer>
          {projects.map((project, idx) => (
            <BgImage key={project.id} active={idx === bgIndex}>
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

        {/* 가로 텍스트 트랙 - 스크롤로 이동, 호버로 배경만 변경 */}
        <TrackArea>
          <Track offset={offset}>
            {projects.map((project, idx) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <ProjectItem
                  showBorder={
                    hoveredIndex === null
                      ? idx === scrollIndex
                      : idx === hoveredIndex
                  }
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    setBgIndex(idx);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setBgIndex(scrollIndex);
                  }}
                  onClick={(e) => {
                    if (idx !== scrollIndex) {
                      e.preventDefault();
                      setScrollIndex(idx);
                      setBgIndex(idx);
                      setHoveredIndex(null);
                    }
                  }}
                >
                  <ItemCategory>CASE STUDY</ItemCategory>
                  <ItemClient active={idx === bgIndex}>
                    {project.client}
                  </ItemClient>
                  <ItemType active={idx === bgIndex}>
                    {project.category}
                  </ItemType>
                  <ItemDesc active={idx === bgIndex}>
                    {project.subtitle}
                  </ItemDesc>
                </ProjectItem>
              </Link>
            ))}
          </Track>
        </TrackArea>

        {/* 좌측 하단 링크 */}
        <ActiveInfo>
          <ActiveLabel>Project Link</ActiveLabel>
          <ActiveUrl
            href={active.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {active.link}
          </ActiveUrl>
        </ActiveInfo>

        {/* 프로그레스 */}
        <ProgressWrap>
          <ProgressFill progress={progress} />
        </ProgressWrap>

        {/* 하단 바 */}
        <BottomBar>
          <MoreLink>더 많은 프로젝트 →</MoreLink>
          <PageIndicator>
            <span>{String(bgIndex + 1).padStart(2, "0")}</span>
            {" / "}
            {String(count).padStart(2, "0")}
          </PageIndicator>
        </BottomBar>
      </PageWrapper>
    </>
  );
};

export default Home;
