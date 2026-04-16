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
      "LV 성형외과의 브랜드 가치를 온라인에서 극대화하기 위해 랜딩페이지와 관리자 시스템을 동시에 제작한 프로젝트입니다. 한국어와 영어를 지원하는 다국어 랜딩페이지를 통해 국내외 고객 모두에게 병원의 전문성과 신뢰감을 전달합니다. 시술 안내, 의료진 소개, 전후 사진 갤러리 등 핵심 콘텐츠를 직관적으로 배치하여 방문자의 상담 문의 전환율을 높였습니다. 관리자 시스템에서는 콘텐츠 업데이트, 예약 관리, 문의 내역 확인을 원스톱으로 처리할 수 있어 운영 효율을 크게 개선했습니다. 반응형 디자인을 적용하여 모바일 환경에서도 최적화된 사용자 경험을 제공하며, SEO 최적화를 통해 검색 엔진에서의 노출을 극대화했습니다. AWS 클라우드 인프라 기반으로 안정적인 서비스 운영 환경을 구축하였으며, 빠른 페이지 로딩 속도로 이탈률을 최소화했습니다.",
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
      "비대면 시대에 맞춰 실시간 영상 상담 서비스를 제공하는 WebRTC 기반 플랫폼입니다. 별도의 앱 설치 없이 웹 브라우저만으로 고화질 영상 통화가 가능하며, 1:1 상담부터 그룹 미팅까지 다양한 시나리오를 지원합니다. 직관적인 UI/UX 설계로 IT에 익숙하지 않은 사용자도 쉽게 접근할 수 있도록 했으며, 상담 예약, 알림, 녹화 기능 등 실무에 필요한 핵심 기능을 탑재했습니다. AWS 클라우드 기반의 미디어 서버를 구축하여 안정적인 영상 품질을 보장하고, 동시 접속자가 증가해도 끊김 없는 서비스를 제공합니다. 디자인 시스템을 적용하여 일관된 브랜드 경험을 구현했으며, 반응형 레이아웃으로 데스크톱과 모바일 환경 모두에서 최적화된 사용 환경을 제공합니다. 보안 프로토콜을 적용하여 상담 내용의 안전한 전송을 보장합니다.",
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
      "실시간 영상 커뮤니케이션의 새로운 기준을 제시하는 WebRTC 기반 대화형 플랫폼입니다. 전 세계 어디서든 브라우저 하나로 즉시 영상 대화를 시작할 수 있으며, 초저지연 기술을 적용하여 마치 대면하는 듯한 자연스러운 소통 경험을 제공합니다. AWS 클라우드형 서버를 구축하여 글로벌 사용자에게도 안정적인 연결 품질을 보장하며, 트래픽 급증 시에도 자동 스케일링으로 서비스 연속성을 유지합니다. Redux를 활용한 체계적인 상태 관리로 복잡한 실시간 데이터 흐름을 안정적으로 처리하며, 채팅, 화면 공유, 참가자 관리 등 풍부한 부가 기능을 제공합니다. 사용자 친화적인 인터페이스 설계로 별도의 학습 없이도 직관적으로 사용할 수 있으며, 모바일 최적화를 통해 이동 중에도 끊김 없는 영상 소통이 가능합니다. 엔드투엔드 암호화를 적용하여 대화 내용의 보안성을 확보했습니다.",
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
      "의료 서비스의 접근성을 높이기 위해 기획된 굿닥터 랜딩페이지입니다. 환자가 필요한 의료 정보를 빠르게 찾고, 간편하게 상담을 신청할 수 있도록 사용자 여정을 최적화하여 설계했습니다. 의료진 소개, 진료 과목 안내, 오시는 길 등 핵심 정보를 시각적으로 명확하게 전달하며, 신뢰감을 줄 수 있는 깔끔하고 전문적인 디자인을 적용했습니다. 원클릭 상담 예약 기능을 통해 방문자가 최소한의 단계로 문의를 남길 수 있어 전환율을 극대화했습니다. 모바일 퍼스트 반응형 디자인으로 스마트폰에서의 사용 경험을 최우선으로 고려했으며, 페이지 로딩 속도 최적화로 이탈률을 최소화했습니다. SEO 최적화를 통해 지역 검색에서 상위 노출될 수 있도록 구조화된 마크업을 적용했으며, 향후 콘텐츠 확장에도 유연하게 대응할 수 있는 구조로 개발되었습니다.",
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
      "WAKA 서비스의 핵심 가치를 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 사용자의 시선 흐름을 고려한 섹션 구성으로 서비스의 장점과 차별점을 자연스럽게 인지할 수 있도록 설계했습니다. 라이트 모드와 다크 모드를 모두 지원하여 사용자의 환경 설정에 맞춘 최적의 시각적 경험을 제공하며, 요금제 비교 페이지를 통해 고객이 자신에게 맞는 플랜을 쉽게 선택할 수 있도록 구현했습니다. 스크롤 기반의 인터랙티브 애니메이션으로 페이지 탐색의 몰입감을 높였으며, CTA 버튼의 전략적 배치로 가입 전환율을 극대화했습니다. 반응형 디자인을 적용하여 데스크톱부터 모바일까지 모든 디바이스에서 일관된 브랜드 경험을 유지하며, 페이지 성능 최적화를 통해 3초 이내 완전 로딩을 달성했습니다. 지속적인 A/B 테스트가 가능한 구조로 설계하여 마케팅 성과를 데이터 기반으로 개선할 수 있습니다.",
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
      "참사랑병원의 따뜻한 의료 철학을 온라인에서 그대로 전달하기 위해 제작된 랜딩페이지입니다. 환자와 보호자가 병원을 방문하기 전 필요한 모든 정보를 한눈에 확인할 수 있도록 진료 과목, 의료진 소개, 시설 안내, 오시는 길 등을 체계적으로 구성했습니다. 부드러운 색감과 직관적인 레이아웃으로 의료 기관 특유의 딱딱한 느낌을 최소화하고, 방문자에게 편안함과 신뢰감을 동시에 전달합니다. 온라인 상담 신청 기능을 통해 환자가 별도의 전화 없이도 간편하게 문의할 수 있으며, 이는 병원의 신규 환자 유입에 직접적으로 기여합니다. 모바일 최적화를 통해 스마트폰으로 검색하는 환자들에게도 최상의 경험을 제공하며, 빠른 로딩 속도로 급하게 병원을 찾는 환자의 이탈을 방지합니다. 지역 SEO 최적화를 적용하여 인근 지역 검색 시 상위 노출을 달성할 수 있도록 설계했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/truelove/tl_main.webp",
    images: [
      "/images/truelove/tl_landing.webp",
    ],
    link: "",
  },
  {
    id: "galaxy",
    title: "갤럭시 프로젝트",
    subtitle: "Three.js + Cannon.js 3D 물리엔진 게임",
    category: "3D Game",
    date: "2023",
    client: "갤럭시 프로젝트",
    description:
      "Three.js와 Cannon.js 물리엔진을 결합하여 웹 브라우저에서 직접 플레이할 수 있는 3D 게임입니다. 실시간 물리 시뮬레이션을 적용하여 중력, 충돌, 마찰 등 현실적인 물리 반응을 구현했으며, 사용자가 로버를 직접 조작하며 지형을 탐험하는 인터랙티브 체험을 제공합니다. WebGL 기반의 고품질 3D 렌더링으로 생동감 있는 환경을 연출하고, 키보드와 마우스를 활용한 직관적인 조작 시스템으로 누구나 쉽게 게임을 즐길 수 있습니다. 물리 엔진의 정밀한 충돌 감지와 강체 시뮬레이션으로 사실적인 차량 거동을 재현했으며, 다양한 지형과 장애물을 배치하여 게임의 재미를 극대화했습니다. Vite를 사용한 빠른 빌드 환경에서 개발되었으며, 3D 에셋 최적화를 통해 별도 설치 없이 웹 브라우저만으로 부드러운 게임 플레이가 가능합니다. 게임, 시뮬레이션, 인터랙티브 교육 등 물리 엔진이 필요한 다양한 웹 프로젝트에 적용 가능한 기술력을 보여줍니다.",
    techStack: ["Three.js", "Cannon.js", "WebGL", "Vite"],
    thumbnail: "/images/popol-bg/content06.webp",
    images: [],
    link: "https://curiosity-rover-project.vercel.app/",
    bgWhite: true,
  },
  {
    id: "lyft",
    title: "LYFT 랜딩 & 관리자",
    subtitle: "LYFT 쇼핑몰 랜딩페이지 및 관리자 시스템",
    category: "Landing & Admin",
    date: "2022",
    client: "LYFT",
    description:
      "LYFT 쇼핑몰의 온라인 존재감을 강화하고 운영 효율을 극대화하기 위해 랜딩페이지와 관리자 시스템을 통합 제작한 프로젝트입니다. 랜딩페이지는 브랜드의 프리미엄 이미지를 반영한 세련된 디자인으로 방문자의 첫인상을 사로잡으며, 상품 카탈로그와 프로모션 영역을 전략적으로 배치하여 구매 전환을 유도합니다. CLOUD형 관리자 대시보드에서는 상품 등록, 재고 관리, 주문 처리, 매출 분석 등 쇼핑몰 운영에 필요한 모든 기능을 원스톱으로 제공합니다. 실시간 데이터 시각화를 통해 매출 트렌드와 고객 행동 패턴을 즉시 파악할 수 있어 데이터 기반의 의사결정이 가능합니다. AWS EC2, RDS, S3, CloudFront, Route53을 활용한 안정적인 클라우드 인프라를 구축하여 트래픽 급증 시에도 안정적인 서비스를 보장합니다. Material UI 기반의 디자인 시스템을 적용하여 관리자 화면의 일관성과 사용성을 확보했으며, 향후 기능 확장에도 유연하게 대응할 수 있는 모듈화된 아키텍처로 개발되었습니다.",
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
      "Mercedes-Benz G63의 역동적인 매력을 웹에서 생생하게 체험할 수 있는 Three.js 기반 3D 인터랙티브 쇼케이스입니다. WebGL 기술을 활용한 실시간 3D 렌더링으로 차량의 외관을 360도 자유롭게 탐색할 수 있으며, 내부 인테리어까지 세밀하게 구현하여 실제 차량을 눈앞에서 보는 듯한 몰입감을 제공합니다. 사용자가 직접 차량의 바디 컬러를 변경해볼 수 있는 커스터마이징 기능을 탑재하여 인터랙티브한 경험을 극대화했습니다. GSAP 애니메이션 라이브러리를 활용한 부드러운 카메라 전환 효과로 시네마틱한 프레젠테이션을 연출하며, 스크롤 기반의 스토리텔링 구조로 차량의 특징을 자연스럽게 소개합니다. Vite 기반의 빌드 환경을 구성하여 빠른 개발 속도와 최적화된 번들 사이즈를 달성했으며, GPU 가속을 활용한 렌더링 최적화로 다양한 디바이스에서도 원활한 3D 경험을 보장합니다. 자동차, 부동산, 제품 등 3D 시각화가 필요한 모든 분야에 적용 가능한 기술력을 보여주는 프로젝트입니다.",
    techStack: ["Three.js", "WebGL", "GSAP", "Vite"],
    thumbnail: "/images/g63/g63_main.webp",
    images: [
      "/images/g63/g63_inner.webp",
      "/images/g63/g63_color.webp",
    ],
    link: "https://g63-modeling.vercel.app/",
  },
  {
    id: "jwork",
    title: "제이웍 관리자 화면",
    subtitle: "CLOUD형 관리자 대시보드 시스템",
    category: "Web Application",
    date: "2022",
    client: "제이웍",
    description:
      "제이웍의 비즈니스 운영을 디지털로 전환하기 위해 제작된 CLOUD형 관리자 대시보드입니다. 디자인 시스템을 적용하여 모든 화면에서 일관된 UI/UX를 제공하며, 복잡한 업무 데이터를 시각적으로 명확하게 전달합니다. 사용자 관리, 콘텐츠 관리, 통계 분석 등 핵심 관리 기능을 직관적인 인터페이스로 구현하여 별도의 교육 없이도 즉시 활용할 수 있습니다. AWS EC2, RDS, S3, CloudFront, Route53 기반의 안정적인 서버 환경에서 운영되어 데이터 유실 걱정 없이 안심하고 사용할 수 있으며, 자동 백업 시스템으로 비즈니스 연속성을 보장합니다. 권한별 접근 제어를 통해 조직 내 역할에 따른 맞춤형 관리 환경을 제공하며, 실시간 알림 기능으로 중요한 변경 사항을 즉시 파악할 수 있습니다. 모듈화된 아키텍처로 개발되어 새로운 관리 기능의 추가와 기존 기능의 수정이 빠르고 안정적으로 이루어집니다.",
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
      "개발자 생태계의 트렌드를 데이터로 읽어내는 Github 기반 랭킹 서비스입니다. Github의 공개 API를 활용하여 개발자들의 활동 데이터를 수집하고, 이를 기반으로 기여도, 인기도, 활동량 등 다양한 지표의 랭킹을 제공합니다. 프로그래밍 언어별 트렌드 분석을 통해 현재 개발 시장에서 어떤 기술이 주목받고 있는지 한눈에 파악할 수 있으며, StackOverflow 데이터를 연동한 차트 시각화로 기술 커뮤니티의 동향까지 종합적으로 확인할 수 있습니다. Chart.js를 활용한 인터랙티브 차트로 데이터를 직관적으로 표현하며, 필터링과 정렬 기능으로 사용자가 원하는 정보를 빠르게 탐색할 수 있습니다. 반응형 레이아웃으로 모바일 환경에서도 쾌적한 데이터 탐색이 가능하며, 주기적인 데이터 갱신으로 항상 최신 트렌드를 반영합니다. 개발자 채용, 기술 스택 선정, 시장 분석 등 다양한 의사결정에 활용할 수 있는 실용적인 서비스입니다.",
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
      "웹 기술만으로 구현한 몰입감 높은 3D 인터랙티브 포트폴리오입니다. Three.js와 WebGL을 활용하여 브라우저에서 실시간으로 렌더링되는 3D 공간을 구현했으며, 사용자가 마우스와 스크롤로 공간을 자유롭게 탐색할 수 있습니다. GSAP와 ScrollTrigger를 조합하여 스크롤에 반응하는 시네마틱 카메라 워크를 구현했으며, 각 섹션마다 다른 시점과 연출로 콘텐츠에 대한 몰입도를 극대화했습니다. 라이팅, 셰이더, 포스트 프로세싱 등 고급 렌더링 기법을 적용하여 포토리얼리스틱에 가까운 시각적 품질을 달성했습니다. Vite를 사용한 빌드 환경으로 빠른 개발 이터레이션과 최적화된 프로덕션 번들을 구현했으며, 텍스처 압축과 모델 최적화를 통해 로딩 시간을 최소화했습니다. 이 프로젝트는 부동산 가상 투어, 제품 3D 뷰어, 인터랙티브 전시 등 다양한 비즈니스 영역에 적용할 수 있는 3D 웹 기술의 가능성을 보여줍니다.",
    techStack: ["Three.js", "WebGL", "GSAP", "Vite"],
    thumbnail: "/images/popol-bg/content05.webp",
    images: [],
    link: "https://myhome-portfolio.vercel.app/",
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
      "멘토 회사의 판매 프로세스를 체계적으로 관리하기 위해 제작된 CLOUD형 관리자 대시보드입니다. 상품 등록부터 주문 처리, 재고 관리, 매출 분석까지 판매 운영에 필요한 모든 워크플로우를 하나의 플랫폼에서 통합 관리할 수 있습니다. 실시간 매출 대시보드를 통해 일별, 주별, 월별 매출 추이를 한눈에 파악할 수 있으며, 데이터 기반의 비즈니스 인사이트를 도출하여 전략적 의사결정을 지원합니다. AWS EC2, RDS, S3, CloudFront, Route53을 활용한 안정적인 클라우드 인프라에서 운영되어 서비스 가용성 99.9%를 보장하며, 자동화된 백업 시스템으로 데이터 안전성을 확보합니다. 역할 기반의 권한 관리 시스템으로 조직 구조에 맞는 맞춤형 접근 제어가 가능하며, 감사 로그를 통해 모든 관리 활동을 추적할 수 있습니다. Material UI 기반의 일관된 디자인 시스템을 적용하여 직관적이고 효율적인 관리 환경을 제공합니다.",
    techStack: ["React", "TypeScript", "Material UI", "AWS"],
    thumbnail: "/images/popol-bg/content07.webp",
    images: [],
    link: "https://mentor-dashboard-navy.vercel.app/",
    bgWhite: true,
  },
];

export default projects;
