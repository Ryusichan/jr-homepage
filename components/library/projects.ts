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
  bgWhite?: boolean;
}

const projects: ProjectData[] = [
  {
    id: "lv-ps",
    title: "LV 성형외과 랜딩 & 관리자",
    subtitle: "LV 성형외과 랜딩페이지 및 관리자 시스템",
    category: "Landing & Admin",
    date: "2024",
    client: "LV 성형외과",
    description:
      "LV 성형외과의 랜딩페이지와 관리자 페이지를 제작한 프로젝트입니다. 다국어(한/영) 지원 랜딩페이지를 통해 해외 고객 유치를 돕고, 관리자 시스템으로 콘텐츠와 예약을 효율적으로 관리할 수 있도록 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
    thumbnail: "/images/lv/lv_main.webp",
    images: [
      "/images/lv/LV_home.webp",
      "/images/lv/LV_content01.webp",
      "/images/lv/LV_ask.webp",
      "/images/lv/LV_admin.webp",
    ],
    link: "https://www.lv-ps.com/ko",
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
    thumbnail: "/images/vhm/vhm_main.webp",
    images: [
      "/images/vhm/vhm_home.webp",
      "/images/vhm/vhm_landing.webp",
    ],
    link: "https://www.videohelp.me",
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
    thumbnail: "/images/gotalk/gotalk_main.webp",
    images: [
      "/images/gotalk/gotalk_landing.webp",
    ],
    link: "https://www.gotalk.to",
  },
  {
    id: "gooddoctor",
    title: "굿닥터 랜딩페이지",
    subtitle: "굿닥터 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "굿닥터",
    description:
      "굿닥터 서비스의 랜딩페이지를 제작한 프로젝트입니다. 의료 서비스 소개와 상담 안내를 효과적으로 전달할 수 있도록 깔끔한 UI로 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/gooddoctor/gd_main.webp",
    images: [
      "/images/gooddoctor/gd_landing.webp",
    ],
    link: "",
  },
  {
    id: "waka",
    title: "WAKA 랜딩페이지",
    subtitle: "WAKA 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "WAKA",
    description:
      "WAKA 서비스의 랜딩페이지를 제작한 프로젝트입니다. 라이트/다크 모드를 지원하며, 서비스 소개와 요금제 안내 페이지를 깔끔한 UI로 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/wakawaka/waka_main.webp",
    images: [
      "/images/wakawaka/waka_landing.webp",
      "/images/wakawaka/waka_dark.webp",
      "/images/wakawaka/waka_price.webp",
      "/images/wakawaka/waka_price_dark.webp",
    ],
    link: "",
  },
  {
    id: "truelove",
    title: "참사랑병원 랜딩페이지",
    subtitle: "참사랑병원 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "참사랑병원",
    description:
      "참사랑병원의 랜딩페이지를 제작한 프로젝트입니다. 병원 소개와 진료 안내를 효과적으로 전달할 수 있도록 깔끔한 UI로 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/truelove/tl_main.webp",
    images: [
      "/images/truelove/tl_landing.webp",
    ],
    link: "",
  },
  {
    id: "lyft",
    title: "LYFT 랜딩 & 관리자",
    subtitle: "LYFT 쇼핑몰 랜딩페이지 및 관리자 시스템",
    category: "Landing & Admin",
    date: "2022",
    client: "LYFT",
    description:
      "LYFT 쇼핑몰의 랜딩페이지와 관리자 시스템을 제작한 프로젝트입니다. 랜딩페이지를 통해 서비스를 소개하고, CLOUD형 관리자 대시보드로 상품 및 서비스를 효율적으로 관리할 수 있도록 구현했습니다. AWS EC2, RDS, S3, CloudFront, Route53을 활용하여 안정적인 인프라를 구축했습니다.",
    techStack: ["React", "TypeScript", "Material UI", "AWS"],
    thumbnail: "/images/lyft/lyft_main.webp",
    images: [
      "/images/lyft/lyft_landing.webp",
      "/images/lyft/lyft_admin.webp",
    ],
    link: "https://admin-dashboard-eta-five.vercel.app/",
  },
  {
    id: "g63",
    title: "G63 3D 인터랙티브",
    subtitle: "Three.js 기반 Mercedes G63 3D 쇼케이스",
    category: "3D Web",
    date: "2024",
    client: "G63 Project",
    description:
      "Three.js를 활용한 Mercedes G63 3D 인터랙티브 쇼케이스입니다. 실시간 3D 렌더링으로 차량의 외관과 내부를 자유롭게 탐색할 수 있으며, 컬러 커스터마이징 기능을 제공합니다.",
    techStack: ["Three.js", "WebGL", "GSAP", "Vite"],
    thumbnail: "/images/g63/g63_main.webp",
    images: [
      "/images/g63/g63_inner.webp",
      "/images/g63/g63_color.webp",
    ],
    link: "",
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
    images: [],
    link: "https://tranquil-taiyaki-aa5a83.netlify.app/dashboard/app",
    bgWhite: true,
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
    images: [],
    link: "https://develop-ranking.vercel.app/",
    bgWhite: true,
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
    images: [],
    link: "https://myhome-portfolio.vercel.app/",
    bgWhite: true,
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
    images: [],
    link: "https://three-galaxy-lake.vercel.app/",
    bgWhite: true,
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
    images: [],
    link: "https://mentor-dashboard-navy.vercel.app/",
    bgWhite: true,
  },
];

export default projects;
