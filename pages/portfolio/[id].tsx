import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Seo from "../../components/Seo";
import projects, { ProjectData } from "../../components/library/projects";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

interface Props {
  project: ProjectData;
}

const PageWrapper = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

const HeroArea = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 400px;
  max-height: 600px;
  position: relative;
  display: flex;
  align-items: flex-end;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.3) 0%,
      rgba(10, 10, 10, 0.9) 100%
    );
  }

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 300px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 24px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectSubtitle = styled.p`
  font-size: 1.1rem;
  color: #999;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContentArea = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 40px 100px;

  @media (max-width: 768px) {
    padding: 40px 20px 80px;
  }
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

const MetaLabel = styled.span`
  display: block;
  font-size: 0.7rem;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
`;

const MetaValue = styled.span`
  display: block;
  font-size: 0.95rem;
  color: #ddd;
  font-weight: 500;
`;

const SectionHeading = styled.h2`
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
`;

const DescriptionText = styled.p`
  font-size: 1.05rem;
  color: #aaa;
  line-height: 1.8;
  margin-bottom: 48px;
  word-break: keep-all;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 48px;
`;

const TechTag = styled.span`
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  font-size: 0.85rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    border-color: #7162d7;
    color: #7162d7;
  }
`;

const ImageSection = styled.div`
  margin-bottom: 48px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 10;
  background: #111;
`;

const VisitButton = styled.a`
  display: inline-block;
  background: #7162d7;
  color: #fff;
  padding: 14px 40px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
  margin-top: 16px;

  &:hover {
    background: #5a4cc6;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: 48px 0;
`;

const PortfolioDetail = ({ project }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <Seo title={`${project.title} | Pluton`} />

      <HeroArea>
        <Image
          src={project.thumbnail}
          layout="fill"
          objectFit="cover"
          alt={project.title}
          priority
        />
        <HeroContent>
          <Link href="/">
            <BackLink>
              <ArrowBack sx={{ fontSize: 16 }} />
              Back to Projects
            </BackLink>
          </Link>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
        </HeroContent>
      </HeroArea>

      <ContentArea>
        <MetaGrid>
          <div>
            <MetaLabel>Client</MetaLabel>
            <MetaValue>{project.client}</MetaValue>
          </div>
          <div>
            <MetaLabel>Category</MetaLabel>
            <MetaValue>{project.category}</MetaValue>
          </div>
          <div>
            <MetaLabel>Date</MetaLabel>
            <MetaValue>{project.date}</MetaValue>
          </div>
          <div>
            <MetaLabel>Role</MetaLabel>
            <MetaValue>Design & Development</MetaValue>
          </div>
        </MetaGrid>

        <SectionHeading>Overview</SectionHeading>
        <DescriptionText>{project.description}</DescriptionText>

        <SectionHeading>Tech Stack</SectionHeading>
        <TechList>
          {project.techStack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechList>

        <SectionHeading>Preview</SectionHeading>
        {project.images.map((img, idx) => (
          <ImageSection key={idx}>
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              alt={`${project.title} preview ${idx + 1}`}
            />
          </ImageSection>
        ))}

        <Divider />

        <VisitButton href={project.link} target="_blank" rel="noopener noreferrer">
          Visit Site
        </VisitButton>
      </ContentArea>
    </PageWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.id === params?.id);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};

export default PortfolioDetail;
