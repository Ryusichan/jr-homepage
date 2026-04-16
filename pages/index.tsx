import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import projects from "../components/library/projects";

/* ── 가로 스크롤 영역: 세로 스크롤을 가로 이동으로 변환 ── */
const HorizontalSection = styled.section<{ count: number }>`
  position: relative;
  /* 카드 수 * 100vw 만큼 세로 높이를 확보해서 스크롤 공간 생성 */
  height: ${({ count }) => count * 100}vh;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: #0a0a0a;
`;

const Track = styled.div<{ offset: number }>`
  display: flex;
  height: 100%;
  transform: translateX(${({ offset }) => offset}px);
  will-change: transform;
`;

/* ── 각 프로젝트 카드 (풀스크린 슬라이드) ── */
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

/* ── 카드 안 콘텐츠 ── */
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
  background: #7162d7;
  transition: width 0.1s linear;
`;

/* ── 슬라이드 카운터 ── */
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
  background: #7162d7;
  color: #fff;
  padding: 14px 44px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #5a4cc6;
  }
`;

const Home: NextPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = projects.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionTop < 0 || sectionTop > sectionHeight) {
        // 가로 스크롤 영역 밖
        if (sectionTop < 0) {
          setOffset(0);
          setProgress(0);
          setCurrentIndex(0);
        } else {
          setOffset(-(count - 1) * window.innerWidth);
          setProgress(100);
          setCurrentIndex(count - 1);
        }
        return;
      }

      const ratio = sectionTop / sectionHeight;
      const maxOffset = (count - 1) * window.innerWidth;
      setOffset(-(ratio * maxOffset));
      setProgress(ratio * 100);
      setCurrentIndex(Math.min(Math.floor(ratio * count), count - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  return (
    <>
      <Seo title="Pluton | Digital Experience Studio" />

      <HorizontalSection ref={sectionRef} count={count}>
        <StickyContainer>
          <Track offset={offset}>
            {projects.map((project, idx) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <a style={{ display: "block", flexShrink: 0, width: "100vw", height: "100%" }}>
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
                          {String(idx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
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
        </StickyContainer>
      </HorizontalSection>

      <ContactSection>
        <ContactTitle>프로젝트 문의</ContactTitle>
        <ContactDesc>
          새로운 프로젝트에 대해 이야기 나눠보겠습니다.
        </ContactDesc>
        <ContactButton href="mailto:godtheenell@gmail.com">
          Contact Us
        </ContactButton>
      </ContactSection>
    </>
  );
};

export default Home;
