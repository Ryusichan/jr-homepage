export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  client: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  images: string[];
  link: string;
}

const projects: ProjectData[] = [
  {
    id: "lyft",
    title: "LYFT 관리자 화면",
    subtitle: "LYFT 쇼핑몰 서비스 관리자 대시보드",
    category: "Web Application",
    date: "2022",
    client: "LYFT",
    description:
      "LYFT 쇼핑몰의 서비스 운영을 위한 CLOUD형 관리자 대시보드입니다. AWS EC2, RDS, S3, CloudFront, Route53을 활용하여 안정적인 인프라를 구축하였으며, 실시간 데이터 모니터링과 효율적인 상품 관리 기능을 제공합니다.",
    techStack: ["React", "TypeScript", "Material UI", "AWS"],
    thumbnail: "/images/popol-bg/content00.webp",
    images: ["/images/popol-bg/content00.webp"],
    link: "https://admin-dashboard-eta-five.vercel.app/",
  },
  {
    id: "jwork",
    title: "제이웍 관리자 화면",
    subtitle: "CLOUD형 관리자 대시보드 시스템",
    category: "Web Application",
    date: "2022",
    client: "제이웍",
    description:
      "CLOUD형 관리자 화면으로 디자인 시스템을 적용하여 일관된 UI/UX를 제공합니다. AWS EC2, RDS, S3, CloudFront, Route53 기반의 안정적인 서버 환경에서 운영됩니다.",
    techStack: ["React", "TypeScript", "Material UI", "AWS"],
    thumbnail: "/images/popol-bg/content01.webp",
    images: ["/images/popol-bg/content01.webp"],
    link: "https://tranquil-taiyaki-aa5a83.netlify.app/dashboard/app",
  },
  {
    id: "gotalk",
    title: "Gotalk",
    subtitle: "WEB RTC 기반 대화형 영상 플랫폼",
    category: "Service Platform",
    date: "2022",
    client: "GOTALK",
    description:
      "WebRTC 기술을 기반으로 제작된 실시간 영상 대화 플랫폼입니다. AWS 클라우드형 서버를 구축하여 안정적인 영상 통신 환경을 제공하며, Redux를 활용한 체계적인 State 관리를 통해 최적화된 사용자 경험을 구현했습니다.",
    techStack: ["React", "TypeScript", "WebRTC", "Redux", "AWS"],
    thumbnail: "/images/popol-bg/content02.webp",
    images: ["/images/popol-bg/content02.webp"],
    link: "https://www.gotalk.to",
  },
  {
    id: "videohelp",
    title: "Videohelp.me",
    subtitle: "WEB RTC 기반 영상 상담 플랫폼",
    category: "Service Platform",
    date: "2022",
    client: "Videohelp.me",
    description:
      "WebRTC 기반의 대화형 영상 플랫폼으로, AWS 클라우드형 서버 구축과 디자인 시스템을 적용하여 전문적인 영상 상담 서비스를 제공합니다.",
    techStack: ["React", "TypeScript", "WebRTC", "AWS"],
    thumbnail: "/images/popol-bg/content03.webp",
    images: ["/images/popol-bg/content03.webp"],
    link: "https://www.videohelp.me",
  },
  {
    id: "dev-ranking",
    title: "Developer Ranking",
    subtitle: "Github 기반 개발자 랭킹 서비스",
    category: "Web Service",
    date: "2022",
    client: "Personal Project",
    description:
      "개발자들의 Github 정보를 기반으로 랭킹을 제공하는 서비스입니다. 랭킹 데이터를 통해 개발 언어의 트렌드를 파악할 수 있으며, StackOverflow 데이터를 차트로 시각화하여 제공합니다.",
    techStack: ["React", "TypeScript", "Chart.js", "GitHub API"],
    thumbnail: "/images/popol-bg/content04.webp",
    images: ["/images/popol-bg/content04.webp"],
    link: "https://develop-ranking.vercel.app/",
  },
  {
    id: "three-room",
    title: "THREE.JS 3D 모델링",
    subtitle: "Three.js 기반 인터랙티브 3D 포트폴리오",
    category: "3D Web",
    date: "2023",
    client: "Personal Project",
    description:
      "Three.js와 WebGL을 활용한 3D 모델링 프로젝트입니다. GSAP와 ScrollTrigger를 사용하여 스크롤 기반의 인터랙티브한 3D 경험을 제공하며, Vite를 사용하여 빠른 빌드 환경을 구성했습니다.",
    techStack: ["Three.js", "WebGL", "GSAP", "Vite"],
    thumbnail: "/images/popol-bg/content05.webp",
    images: ["/images/popol-bg/content05.webp"],
    link: "https://myhome-portfolio.vercel.app/",
  },
  {
    id: "galaxy",
    title: "Galaxy 프로젝트",
    subtitle: "Three.js 기반 3D 은하계 시뮬레이션",
    category: "3D Web",
    date: "2023",
    client: "Personal Project",
    description:
      "Three.js 기반의 3D Galaxy 모델링 프로젝트입니다. 은하계 각 행성 간 크기와 거리를 비교하여 사실적으로 표현했으며, Vite를 사용하여 빠른 제작 환경을 구성했습니다.",
    techStack: ["Three.js", "WebGL", "Vite"],
    thumbnail: "/images/popol-bg/content06.webp",
    images: ["/images/popol-bg/content06.webp"],
    link: "https://three-galaxy-lake.vercel.app/",
  },
  {
    id: "mentor",
    title: "멘토 관리자 화면",
    subtitle: "멘토 회사 판매 관리 시스템",
    category: "Web Application",
    date: "2022",
    client: "MENTOR",
    description:
      "멘토 회사의 판매 관리를 위한 CLOUD형 관리자 화면입니다. AWS EC2, RDS, S3, CloudFront, Route53을 활용한 안정적인 인프라 환경에서 운영됩니다.",
    techStack: ["React", "TypeScript", "Material UI", "AWS"],
    thumbnail: "/images/popol-bg/content07.webp",
    images: ["/images/popol-bg/content07.webp"],
    link: "https://mentor-dashboard-navy.vercel.app/",
  },
];

export default projects;
