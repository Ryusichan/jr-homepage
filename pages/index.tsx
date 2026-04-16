import type { NextPage } from "next";
import Seo from "../components/Seo";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import projects from "../components/library/projects";

const PageWrapper = styled.main`
  background-color: #0a0a0a;
  padding-top: 72px;

  @media (max-width: 900px) {
    padding-top: 64px;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectCard = styled.a`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  overflow: hidden;
  cursor: pointer;
  display: block;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    transition: background 0.5s ease;
    z-index: 1;
  }

  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.15);
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

  @media (max-width: 768px) {
    height: 60vh;
    min-height: 360px;
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px 60px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    padding: 28px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const CardTextGroup = styled.div``;

const CardCategory = styled.span`
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 6px 0;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
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
  padding: 12px 28px;
  transition: all 0.3s ease;
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
  return (
    <>
      <Seo title="Pluton | Digital Experience Studio" />

      <PageWrapper>
        <ProjectList>
          {projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <ProjectCard>
                <Image
                  src={project.thumbnail}
                  layout="fill"
                  objectFit="cover"
                  alt={project.title}
                  loading="lazy"
                />
                <CardContent>
                  <CardTextGroup>
                    <CardCategory>{project.category}</CardCategory>
                    <CardTitle>{project.client}</CardTitle>
                    <CardSubtitle>{project.subtitle}</CardSubtitle>
                  </CardTextGroup>
                  <GoLink className="go-link">View Project →</GoLink>
                </CardContent>
              </ProjectCard>
            </Link>
          ))}
        </ProjectList>

        <ContactSection>
          <ContactTitle>프로젝트 문의</ContactTitle>
          <ContactDesc>
            새로운 프로젝트에 대해 이야기 나눠보겠습니다.
          </ContactDesc>
          <ContactButton href="mailto:godtheenell@gmail.com">
            Contact Us
          </ContactButton>
        </ContactSection>
      </PageWrapper>
    </>
  );
};

export default Home;
