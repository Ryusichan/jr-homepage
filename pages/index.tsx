import type { NextPage } from "next";
import { useEffect, useRef, useState, useCallback } from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import projects from "../components/library/projects";

/* ── 전체 래퍼: wheel 이벤트로 스냅 제어 ── */
const PageWrapper = styled.div`
  background: #0a0a0a;
`;

const SliderSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Track = styled.div<{ index: number }>`
  display: flex;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
  transform: translateX(${({ index }) => -index * 100}vw);
  will-change: transform;
`;

/* ── 각 슬라이드 ── */
const Slide = styled.div`
  flex-shrink: 0;
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.5s ease;
    z-index: 1;
  }

  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.2);
    }
    img {
      transform: scale(1.03);
    }
    .go-link {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    transition: transform 0.8s ease;
  }
`;

/* ── 슬라이드 콘텐츠 ── */
const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 56px 64px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const TextGroup = styled.div``;

const Number = styled.span`
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  font-family: monospace;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
`;

const Category = styled.span`
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const GoLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 14px 32px;
  transition: all 0.35s ease;
  opacity: 0;
  transform: translateY(8px);
  flex-shrink: 0;

  &:hover {
    background: #fff;
    color: #0a0a0a;
    border-color: #fff;
  }

  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
    padding: 10px 22px;
    font-size: 0.8rem;
  }
`;

/* ── 프로그레스 바 ── */
const ProgressBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 64px;
  right: 64px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 3;

  @media (max-width: 768px) {
    left: 24px;
    right: 24px;
  }
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: #fff;
  transition: width 0.8s cubic-bezier(0.65, 0, 0.35, 1);
`;

/* ── 카운터 ── */
const Counter = styled.div`
  position: absolute;
  top: 50%;
  right: 48px;
  transform: translateY(-50%);
  z-index: 3;
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.8rem;
  font-family: monospace;
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;

  span {
    color: #fff;
  }

  @media (max-width: 768px) {
    right: 16px;
    font-size: 0.7rem;
  }
`;

/* ── 도트 네비게이션 ── */
const DotNav = styled.div`
  position: absolute;
  right: 48px;
  bottom: 56px;
  z-index: 3;
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    right: 24px;
    bottom: 40px;
    gap: 6px;
  }
`;

const Dot = styled.button<{ active: boolean }>`
  width: ${({ active }) => (active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${({ active }) =>
    active ? "#fff" : "rgba(255, 255, 255, 0.3)"};
  cursor: pointer;
  transition: all 0.4s ease;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

/* ── Contact 섹션 ── */
const ContactSection = styled.section`
  background-color: #0a0a0a;
  padding: 100px 40px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 36px;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: #fff;
  color: #0a0a0a;
  padding: 14px 44px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #ddd;
  }
`;

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const count = projects.length;
  const touchStart = useRef(0);

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= count || isAnimating.current) return;
      isAnimating.current = true;
      setCurrentIndex(idx);
      setTimeout(() => {
        isAnimating.current = false;
      }, 900);
    },
    [count]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Contact 섹션 위에서는 무시
      const target = e.target as HTMLElement;
      if (target.closest("[data-contact]")) return;

      e.preventDefault();

      if (isAnimating.current) return;

      if (e.deltaY > 30) {
        if (currentIndex < count - 1) {
          goTo(currentIndex + 1);
        }
      } else if (e.deltaY < -30) {
        if (currentIndex > 0) {
          goTo(currentIndex - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goTo(currentIndex + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goTo(currentIndex - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) goTo(currentIndex + 1);
        else goTo(currentIndex - 1);
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
  }, [currentIndex, count, goTo]);

  const progress = ((currentIndex + 1) / count) * 100;

  return (
    <>
      <Seo title="Pluton | Digital Experience Studio" />

      <PageWrapper>
        <SliderSection>
          <Track index={currentIndex}>
            {projects.map((project, idx) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <a
                  style={{
                    display: "block",
                    flexShrink: 0,
                    width: "100vw",
                    height: "100%",
                  }}
                >
                  <Slide>
                    <Image
                      src={project.thumbnail}
                      layout="fill"
                      objectFit="cover"
                      alt={project.title}
                      priority={idx < 2}
                      loading={idx < 2 ? undefined : "lazy"}
                    />
                    <SlideContent>
                      <TextGroup>
                        <Number>
                          {String(idx + 1).padStart(2, "0")} /{" "}
                          {String(count).padStart(2, "0")}
                        </Number>
                        <Category>{project.category}</Category>
                        <Title>{project.client}</Title>
                        <Subtitle>{project.subtitle}</Subtitle>
                      </TextGroup>
                      <GoLink className="go-link">View Project →</GoLink>
                    </SlideContent>
                  </Slide>
                </a>
              </Link>
            ))}
          </Track>

          <Counter>
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            {" — "}
            {String(count).padStart(2, "0")}
          </Counter>

          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>

          <DotNav>
            {projects.map((_, idx) => (
              <Dot
                key={idx}
                active={idx === currentIndex}
                onClick={() => goTo(idx)}
              />
            ))}
          </DotNav>
        </SliderSection>
      </PageWrapper>
    </>
  );
};

export default Home;
