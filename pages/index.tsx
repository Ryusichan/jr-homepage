import type { NextPage } from "next";
import Seo from "../components/Seo";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import projects from "../components/library/projects";

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 40px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(113, 98, 215, 0.08) 0%,
      transparent 60%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 100px 20px 60px;
    min-height: 70vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  line-height: 1.1;

  span {
    color: #7162d7;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #888888;
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ProjectSection = styled.section`
  width: 100%;
  background-color: #0a0a0a;
  padding: 0;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 60px 40px 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  cursor: pointer;
  background-color: #111;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
    transition: opacity 0.4s ease;
  }

  &:hover {
    &::after {
      background: rgba(113, 98, 215, 0.85);
    }

    img {
      transform: scale(1.05);
    }

    .card-overlay {
      opacity: 1;
      transform: translateY(0);
    }

    .card-info {
      opacity: 0;
    }
  }

  img {
    transition: transform 0.6s ease;
  }
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px;
  z-index: 2;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CardCategory = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
  padding: 32px;
  text-align: center;
`;

const OverlayTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const OverlaySubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 24px;
  line-height: 1.5;
`;

const ViewButton = styled.span`
  display: inline-block;
  border: 2px solid #fff;
  color: #fff;
  padding: 12px 36px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #7162d7;
  }

  @media (max-width: 768px) {
    padding: 10px 28px;
    font-size: 0.8rem;
  }
`;

const ContactSection = styled.section`
  width: 100%;
  background-color: #0a0a0a;
  padding: 120px 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContactDesc = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 40px;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: #7162d7;
  color: #fff;
  padding: 16px 48px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #5a4cc6;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Pluton" />

      <HeroSection>
        <HeroTitle>
          We Create <span>Digital</span>
          <br />
          Experiences
        </HeroTitle>
        <HeroSubtitle>
          기획부터 디자인, 개발, 배포까지.
          <br />
          고객 맞춤형 디지털 서비스를 제작합니다.
        </HeroSubtitle>
      </HeroSection>

      <ProjectSection>
        <SectionTitle>Selected Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <a>
                <ProjectCard>
                  <Image
                    src={project.thumbnail}
                    layout="fill"
                    objectFit="cover"
                    alt={project.title}
                    loading="lazy"
                  />
                  <CardInfo className="card-info">
                    <CardCategory>{project.category}</CardCategory>
                    <CardTitle>{project.title}</CardTitle>
                  </CardInfo>
                  <CardOverlay className="card-overlay">
                    <OverlayTitle>{project.title}</OverlayTitle>
                    <OverlaySubtitle>{project.subtitle}</OverlaySubtitle>
                    <ViewButton>View Project</ViewButton>
                  </CardOverlay>
                </ProjectCard>
              </a>
            </Link>
          ))}
        </ProjectGrid>
      </ProjectSection>

      <ContactSection>
        <ContactTitle>프로젝트를 시작해보세요</ContactTitle>
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
