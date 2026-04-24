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
      "LV 성형외과의 브랜드 가치를 온라인에서 극대화하기 위해 랜딩페이지와 관리자 시스템을 동시에 구축한 프로젝트입니다. 한국어와 영어 다국어 지원으로 국내외 고객 모두에게 병원의 전문성과 신뢰감을 전달합니다.\n\n시술 안내, 의료진 소개, 전후 사진 갤러리 등 핵심 콘텐츠를 직관적으로 배치해 상담 문의 전환율을 높였으며, 관리자 시스템에서는 콘텐츠 업데이트·예약 관리·문의 내역을 원스톱으로 처리할 수 있어 운영 효율을 크게 개선했습니다.\n\n반응형 디자인과 SEO 최적화로 모바일 환경과 검색 노출을 모두 잡았으며, AWS 클라우드 인프라 기반의 안정적인 운영 환경과 빠른 페이지 로딩 속도로 이탈률을 최소화했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "NestJS", "PostgreSQL", "Prisma"],
    thumbnail: "/images/lv/lv_main.webp",
    images: [
      "/images/lv/lv_home.webp",
      "/images/lv/lv_content01.webp",
      "/images/lv/lv_ask.webp",
      "/images/lv/lv_admin.webp",
    ],
    link: "https://www.lv-ps.com/ko",
  },
  {
    id: "miricampus",
    title: "미리캠퍼스 랜딩페이지",
    subtitle: "미리캠퍼스 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "미리캠퍼스",
    description:
      "학생과 학부모가 대학 생활을 미리 경험하고 준비할 수 있도록 돕는 미리캠퍼스 서비스의 가치를 효과적으로 전달하는 랜딩페이지입니다. 섹션별 스토리텔링 구조로 방문자가 서비스의 핵심 가치를 자연스럽게 이해할 수 있도록 설계했습니다.\n\n친근하고 밝은 톤앤매너의 비주얼과 감각적인 타이포그래피로 젊은 타깃층에 친화적인 브랜드 이미지를 구축했으며, 서비스 소개·주요 기능·이용 방법·혜택을 직관적으로 전달할 수 있도록 정보 구조를 체계적으로 설계했습니다.\n\nCTA 버튼의 전략적 배치와 스크롤 기반 인터랙티브 애니메이션으로 전환율과 몰입도를 동시에 극대화했으며, 반응형 디자인·빠른 로딩·SEO 최적화로 모바일 중심 학생 타깃층에 최적화된 경험을 제공합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Vercel Edge", "ISR"],
    thumbnail: "/images/miricampus/miricampus_main.webp",
    images: [
      "/images/miricampus/miricampus_landing.webp",
    ],
    link: "",
  },
  {
    id: "nobondhome",
    title: "노본드홈 랜딩페이지",
    subtitle: "노본드홈 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "노본드홈",
    description:
      "노본드홈 브랜드의 고유한 정체성과 서비스 가치를 온라인에서 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 감각적인 비주얼과 세련된 타이포그래피로 프리미엄한 브랜드 인상을 구축했습니다.\n\n서비스 소개·주요 특징·이용 방법·문의 섹션을 체계적으로 배치해 고객이 필요한 정보를 빠르게 확인할 수 있도록 사용자 여정을 최적화했으며, 브랜드 신뢰감을 강화하는 스토리텔링 구조로 구성했습니다.\n\n반응형·모바일 퍼스트 설계로 어떤 환경에서도 일관된 경험을 제공하고, 스크롤 기반 인터랙티브 애니메이션과 전략적 CTA 배치로 문의 전환율을 극대화했으며, SEO 최적화로 검색 노출까지 확보했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
    thumbnail: "/images/nobondhome/nobondhome_main.webp",
    images: [
      "/images/nobondhome/nobondhome_landing.webp",
    ],
    link: "",
  },
  {
    id: "videohelp",
    title: "Videohelp.me",
    subtitle: "WEB RTC 기반 영상 상담 플랫폼",
    category: "Service Platform",
    date: "2022",
    client: "Videohelp.me",
    description:
      "비대면 시대에 맞춰 실시간 영상 상담 서비스를 제공하는 WebRTC 기반 플랫폼입니다. 별도 앱 설치 없이 브라우저만으로 고화질 영상 통화가 가능하며, 1:1 상담부터 그룹 미팅까지 다양한 시나리오를 지원합니다.\n\n직관적인 UI/UX로 IT에 익숙하지 않은 사용자도 쉽게 접근할 수 있도록 했으며, 상담 예약·알림·녹화 등 실무에 필요한 핵심 기능을 탑재했습니다. 디자인 시스템을 적용해 일관된 브랜드 경험을 구현했고 반응형 레이아웃으로 모든 환경을 지원합니다.\n\nAWS 클라우드 기반의 미디어 서버로 동시 접속자가 증가해도 안정적인 영상 품질을 보장하며, 보안 프로토콜을 적용해 상담 내용의 안전한 전송까지 확보했습니다.",
    techStack: ["React", "TypeScript", "WebRTC", "AWS", "Node.js", "Socket.IO", "MongoDB", "Redis"],
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
      "실시간 영상 커뮤니케이션의 새로운 기준을 제시하는 WebRTC 기반 대화형 플랫폼입니다. 전 세계 어디서든 브라우저 하나로 즉시 영상 대화를 시작할 수 있으며, 초저지연 기술로 마치 대면하는 듯한 자연스러운 소통 경험을 제공합니다.\n\nRedux를 활용한 체계적인 상태 관리로 복잡한 실시간 데이터 흐름을 안정적으로 처리하며, 채팅·화면 공유·참가자 관리 등 풍부한 부가 기능을 제공합니다. 사용자 친화적인 인터페이스와 모바일 최적화로 이동 중에도 끊김 없는 영상 소통이 가능합니다.\n\nAWS 클라우드 서버의 자동 스케일링으로 트래픽 급증 시에도 서비스 연속성을 유지하며, 엔드투엔드 암호화로 대화 내용의 보안성까지 확보했습니다.",
    techStack: ["React", "TypeScript", "WebRTC", "Redux", "AWS", "Node.js", "Socket.IO", "MongoDB", "Nginx"],
    thumbnail: "/images/gotalk/gotalk_main.webp",
    images: [
      "/images/gotalk/gotalk_landing.webp",
    ],
    link: "https://www.gotalk.to",
  },
  {
    id: "aifireguard",
    title: "AI FireGuard",
    subtitle: "AI 기반 실시간 화재 감지 시스템",
    category: "Web Application",
    date: "2025",
    client: "AI FireGuard",
    description:
      "AI FireGuard는 딥러닝 기반 영상 분석으로 공장·산업 시설·물류 창고 등 화재 위험 현장을 24시간 실시간 모니터링하는 관제 시스템입니다. 감지 정확도 99% 수준의 AI 모델로 오탐지를 최소화하고 신속한 대응을 가능케 합니다.\n\n실시간 모니터링 대시보드에서 카메라별 영상·감지 이벤트·시스템 성능을 통합 확인할 수 있으며, 화재 감지 시 긴급 알림이 즉시 발송됩니다. 이벤트 기록 페이지는 다각도 필터로 과거 이력을 조회하고 영상 증거와 함께 체계적으로 관리합니다.\n\n분석 리포트는 주간·월간 감지 추이와 카메라별 감지 현황, 피해 감소 추정치를 도넛 차트와 막대 그래프로 시각화합니다. 다크 테마 UI로 장시간 모니터링 피로도를 최소화하고, 역할 기반 권한 관리와 감사 로그로 기업 보안 요구사항까지 충족합니다.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "WebRTC", "TensorFlow", "Python", "Docker", "PostgreSQL"],
    thumbnail: "/images/aifireguard/aifireguard_main.webp",
    images: [
      "/images/aifireguard/aifireguard_service1.webp",
      "/images/aifireguard/aifireguard_service2.webp",
      "/images/aifireguard/aifireguard_service3.webp",
      "/images/aifireguard/aifireguard_service4.webp",
    ],
    link: "",
  },
  {
    id: "goyong",
    title: "고용보조금 지원 플랫폼",
    subtitle: "고용보조금 신청 및 관리 서비스",
    category: "Service Platform",
    date: "2024",
    client: "고용보조금 지원",
    description:
      "복잡하고 번거로웠던 고용보조금 신청 과정을 디지털로 전환한 플랫폼입니다. 여러 기관 방문과 수많은 서류를 온라인에서 원스톱으로 처리할 수 있도록 구현해 신청자의 시간과 비용 부담을 크게 줄였습니다.\n\n기업 규모·업종·고용 형태 등 기본 정보를 입력하면 받을 수 있는 고용보조금을 자동으로 안내하고, 지원 사업별 자격 요건과 금액을 명확하게 비교할 수 있습니다. 신청서 작성 시 단계별 가이드와 실시간 유효성 검증으로 오류를 최소화했습니다.\n\n관리자 대시보드에서 신청 현황·심사 진행·승인 내역을 실시간 확인할 수 있으며, 자동 알림과 전문가 문의 기능으로 신청 과정을 지원합니다. 안정적인 클라우드 인프라와 보안 프로토콜로 민감한 기업 정보까지 안전하게 보호합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "NestJS", "PostgreSQL", "Prisma"],
    thumbnail: "/images/goyong/goyong_home.webp",
    images: [
      "/images/goyong/goyong_landing.webp",
    ],
    link: "",
  },
  {
    id: "medireview",
    title: "메디리뷰",
    subtitle: "의료 서비스 리뷰 플랫폼",
    category: "Service Platform",
    date: "2024",
    client: "메디리뷰",
    description:
      "환자와 의료 소비자가 신뢰할 수 있는 의료 정보를 공유하고 더 나은 의료 선택을 돕는 리뷰 플랫폼입니다. 병원·의료진·진료 경험에 대한 실제 환자들의 리뷰를 체계적으로 수집하고 투명하게 공개합니다.\n\n직관적인 검색·필터링으로 지역·진료 과목·평점 등 다양한 조건으로 정보를 빠르게 탐색할 수 있으며, 상세 리뷰에서는 진료 만족도·대기 시간·시설 상태 등 항목별 평가를 한눈에 확인할 수 있습니다. 검증된 리뷰 작성 프로세스로 허위 후기를 최소화했습니다.\n\n의료진과 병원은 환자 피드백을 체계적으로 관리해 서비스 품질 개선에 활용할 수 있으며, 모바일 퍼스트 반응형 디자인과 안정적인 클라우드 인프라로 대량의 리뷰 데이터를 안정적으로 처리합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "GraphQL", "MongoDB", "Elasticsearch"],
    thumbnail: "/images/medireview/medireview_main.webp",
    images: [
      "/images/medireview/medireview_service01.webp",
    ],
    link: "",
  },
  {
    id: "chippos",
    title: "칩포스 랜딩페이지",
    subtitle: "칩포스 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "칩포스",
    description:
      "칩포스의 서비스 가치와 브랜드 정체성을 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 섹션별 스토리텔링 구조로 방문자가 핵심 메시지를 직관적으로 파악할 수 있도록 설계했습니다.\n\n서비스 소개·주요 기능·이용 방법·고객 혜택·문의 섹션을 체계적으로 구성하고, 풍부한 시각 자료로 복잡한 서비스 내용도 쉽게 이해할 수 있도록 구현했습니다. 세련된 비주얼과 명확한 타이포그래피로 브랜드의 전문성과 신뢰감을 강조했습니다.\n\nCTA 버튼의 전략적 배치와 사용자 여정 설계로 문의·가입 전환율을 극대화했으며, 반응형 디자인·스크롤 애니메이션·페이지 성능 최적화·SEO 적용으로 전 영역에서 사용자 경험을 강화했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "ISR", "Vercel Edge"],
    thumbnail: "/images/chippos/chippos_main.webp",
    images: [
      "/images/chippos/chippos_landing.webp",
      "/images/chippos/chippos_service.webp",
      "/images/chippos/chippos_service02.webp",
    ],
    link: "",
  },
  {
    id: "futuremedical",
    title: "퓨쳐메디컬 랜딩페이지",
    subtitle: "퓨쳐메디컬 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "퓨쳐메디컬",
    description:
      "미래 의료 서비스의 비전과 전문성을 온라인에서 효과적으로 전달하는 퓨쳐메디컬 랜딩페이지입니다. 절제된 컬러 팔레트와 세련된 타이포그래피로 프리미엄 의료 브랜드의 인상을 구축했습니다.\n\n진료 과목·의료진 소개·시설 안내·오시는 길·상담 문의 등 환자가 필요로 하는 핵심 정보를 체계적으로 배치했으며, 온라인 상담 예약 기능으로 별도의 전화 없이도 간편하게 진료 문의를 남길 수 있습니다.\n\n모바일 퍼스트 반응형 디자인과 빠른 페이지 로딩 속도로 스마트폰 환자의 이탈을 방지하며, 스크롤 인터랙티브 애니메이션과 CTA 전략적 배치, 지역 SEO 최적화로 예약 전환율과 검색 노출을 동시에 달성했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
    thumbnail: "/images/futuremedical/futuremedical_main.webp",
    images: [
      "/images/futuremedical/futuremedical_landing.webp",
    ],
    link: "",
  },
  {
    id: "autoreserve",
    title: "자동 예약 시스템",
    subtitle: "AutoReserve 예약 관리 플랫폼",
    category: "Web Application",
    date: "2024",
    client: "AutoReserve",
    description:
      "기업과 서비스 제공자의 예약 운영을 자동화해 운영 효율을 극대화하는 AutoReserve 플랫폼입니다. 수작업 예약 접수·일정 조율·고객 알림·취소 처리 등 번거로운 업무를 하나의 플랫폼에서 원스톱으로 처리할 수 있도록 구현했습니다.\n\n실시간 예약 대시보드로 전체 현황을 파악하고 시간대별·서비스별 분포를 시각화해 운영 인사이트를 제공합니다. 고객은 직관적인 UI에서 몇 번의 클릭만으로 예약을 완료할 수 있으며, 자동 확인·리마인더 알림으로 노쇼를 최소화했습니다.\n\n관리자는 예약 승인·취소·변경·고객 메모를 세밀하게 제어할 수 있고, 권한 기반 접근 관리와 분석 리포트로 데이터 기반 운영이 가능합니다. 반응형 디자인과 안정적인 클라우드 인프라로 대량 트래픽에도 안정적으로 대응합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    thumbnail: "/images/autoreserve/autoreserve_home.webp",
    images: [
      "/images/autoreserve/autoreserve_service01.webp",
      "/images/autoreserve/autoreserve_service02.webp",
      "/images/autoreserve/autoreserve_service03.webp",
    ],
    link: "",
  },
  {
    id: "esa",
    title: "ESA 이사 플랫폼",
    subtitle: "이사 중개 및 견적 비교 플랫폼",
    category: "Service Platform",
    date: "2024",
    client: "ESA",
    description:
      "이사 서비스를 필요로 하는 소비자와 이사 업체를 연결하는 중개형 플랫폼 ESA입니다. 복잡한 이사 준비 과정을 디지털로 전환해 사용자가 몇 번의 클릭만으로 여러 업체의 경쟁 견적을 받아볼 수 있도록 설계했습니다.\n\n지역·이사 유형·일정·짐 규모 등 세부 조건을 입력하면 조건에 맞는 업체가 매칭되며, 투명한 가격 비교로 합리적인 선택이 가능합니다. 실제 이용 후기와 평점 시스템으로 서비스 품질의 신뢰성을 확보했고, 예약·결제·진행 추적까지 통합 관리합니다.\n\n이사 업체에게는 신규 고객 확보와 스케줄 관리 효율화를 제공하며, 관리자 대시보드로 예약 현황·매출 분석·고객 리뷰를 체계적으로 관리할 수 있습니다. 모바일 퍼스트 반응형 디자인과 안정적인 클라우드 인프라로 서비스 신뢰성을 확보했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "Prisma", "PostgreSQL", "Redis"],
    thumbnail: "/images/esa/esa_main.webp",
    images: [
      "/images/esa/esa_landing.webp",
    ],
    link: "",
  },
  {
    id: "upmo",
    title: "업무 관리 플랫폼",
    subtitle: "업무 프로세스 관리 및 협업 플랫폼",
    category: "Web Application",
    date: "2024",
    client: "업무 관리",
    description:
      "기업의 복잡한 업무 프로세스를 디지털로 체계화해 조직 운영 효율을 극대화하는 업무 관리 플랫폼입니다. 업무 등록·진행 관리·담당자 배정·마감 일정 추적·협업 소통을 하나의 플랫폼에서 통합 제공해 여러 도구를 오가는 번거로움을 제거했습니다.\n\n실시간 대시보드로 부서별·프로젝트별 진행 현황을 파악하고 병목 지점과 지연 업무를 즉시 식별합니다. 드래그 앤 드롭 UI로 업무 상태·우선순위·담당자 변경을 손쉽게 처리하며, 자동 알림으로 중요한 변경사항을 즉시 전달합니다.\n\n권한 기반 접근 제어와 감사 로그로 조직 운영의 투명성을 확보했으며, 분석 리포트로 구성원별 생산성·프로젝트 완료율·평균 처리 시간 등 핵심 지표를 시각화합니다. 반응형 디자인과 안정적인 클라우드 인프라로 대규모 조직에서도 원활한 성능을 보장합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    thumbnail: "/images/upmo/upmo_main.webp",
    images: [
      "/images/upmo/upmo_landing.webp",
      "/images/upmo/upmo_service03.webp",
    ],
    link: "",
  },
  {
    id: "pawcare",
    title: "Pawcare 랜딩페이지",
    subtitle: "반려동물 케어 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "Pawcare",
    description:
      "반려동물과 보호자가 함께하는 건강한 일상을 돕기 위해 제작된 Pawcare 랜딩페이지입니다. 따뜻한 감성의 비주얼과 부드러운 컬러 팔레트로 보호자에게 신뢰감과 친근함을 동시에 전달합니다.\n\n반려동물 케어 서비스의 핵심 가치를 섹션별 스토리텔링 구조로 설계했으며, 서비스 소개·이용 방법·주요 기능을 한눈에 확인할 수 있도록 정보 구조를 최적화했습니다. 사용자 여정을 세심하게 설계해 보호자가 필요한 정보를 빠르게 찾을 수 있습니다.\n\n반응형 디자인과 스크롤 기반 인터랙티브 애니메이션으로 몰입도를 높였고, 전략적 CTA 배치와 SEO 최적화, 빠른 로딩으로 서비스 가입과 문의 전환율을 극대화했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "ISR", "Web Vitals"],
    thumbnail: "/images/pawcare/pawcare_main.webp",
    images: [
      "/images/pawcare/pawcare_landing.webp",
      "/images/pawcare/pawcare_info.webp",
    ],
    link: "",
  },
  {
    id: "bioai",
    title: "BioAI 랜딩페이지",
    subtitle: "BioAI 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "BioAI",
    description:
      "바이오 산업에 AI 기술을 접목한 BioAI 서비스의 전문성과 혁신성을 온라인에서 효과적으로 전달하는 랜딩페이지입니다. 복잡한 AI와 바이오 도메인 지식을 일반 사용자도 쉽게 이해할 수 있도록 정보 구조를 단계적으로 설계했습니다.\n\n인포그래픽과 비주얼 요소로 기술의 차별점을 직관적으로 시각화했으며, 서비스 핵심 가치·주요 기능·적용 사례·기술 우위를 섹션별로 명확하게 구성해 방문자가 자연스럽게 브랜드 스토리에 몰입할 수 있도록 유도했습니다.\n\n전문성을 강조하는 세련된 타이포그래피와 신뢰감을 주는 컬러 팔레트로 B2B 고객과 투자자에게 긍정적인 첫인상을 전달하며, 전략적 CTA 배치와 SEO 최적화로 데모 요청과 문의 전환율까지 확보했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
    thumbnail: "/images/bioai/bioai_main.webp",
    images: [
      "/images/bioai/bioai_landing.webp",
    ],
    link: "",
  },
  {
    id: "lightcontrol",
    title: "라이트컨트롤 랜딩페이지",
    subtitle: "조명 제어 솔루션 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "LightControl",
    description:
      "스마트 조명 제어 솔루션의 기술력과 편의성을 효과적으로 전달하기 위해 제작된 라이트컨트롤 랜딩페이지입니다. 깔끔하고 모던한 비주얼과 세련된 타이포그래피로 브랜드의 전문성과 혁신성을 강조했습니다.\n\n조명 제어 기술의 복잡한 기능을 직관적인 인포그래픽과 이미지로 시각화해 일반 소비자와 B2B 고객 모두가 쉽게 이해할 수 있도록 구성했습니다. 제품 소개·주요 기능·적용 사례·기술 스펙·문의 섹션을 체계적으로 배치했습니다.\n\n전략적 CTA 배치로 데모 요청과 견적 문의 전환율을 극대화했으며, 반응형 디자인·페이지 성능 최적화·SEO 구조화 마크업으로 일관된 브랜드 경험과 검색 상위 노출을 동시에 달성했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "ISR", "Vercel Edge"],
    thumbnail: "/images/lightcontrol/lightcontrol_main.webp",
    images: [
      "/images/lightcontrol/lightcontrol_landing.webp",
      "/images/lightcontrol/lightcontrol_service.webp",
    ],
    link: "",
  },
  {
    id: "massageshop",
    title: "마사지샵 랜딩페이지",
    subtitle: "마사지샵 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "마사지샵",
    description:
      "마사지샵의 프리미엄 힐링 경험을 온라인에서 그대로 전달하는 랜딩페이지입니다. 방문자가 접속하는 순간부터 휴식과 편안함을 느낄 수 있도록 부드러운 색감과 감각적인 비주얼로 공간의 분위기를 시각적으로 재현했습니다.\n\n서비스 소개·코스 안내·시설 소개·가격 정보·예약 문의 등 고객이 실제로 필요로 하는 정보를 체계적으로 배치했으며, 직관적인 예약 및 상담 신청 플로우로 전화 문의 부담 없이 온라인에서 바로 예약을 진행할 수 있습니다.\n\n모바일 퍼스트 반응형 디자인으로 스마트폰 검색 고객에게 최적화된 경험을 제공하며, 빠른 로딩 속도와 지역 SEO 최적화로 인근 지역 상위 노출과 신규 고객 전환율 향상을 동시에 달성했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
    thumbnail: "/images/massageshop/massageshop_main.webp",
    images: [
      "/images/massageshop/massageshop_landing.webp",
    ],
    link: "",
  },
  {
    id: "gooddoctor",
    title: "굿닥터 랜딩페이지",
    subtitle: "굿닥터 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "굿닥터",
    description:
      "의료 서비스의 접근성을 높이기 위해 기획된 굿닥터 랜딩페이지입니다. 환자가 필요한 의료 정보를 빠르게 찾고 간편하게 상담을 신청할 수 있도록 사용자 여정을 최적화하여 설계했습니다.\n\n의료진 소개·진료 과목·오시는 길 등 핵심 정보를 시각적으로 명확하게 전달하며, 신뢰감을 줄 수 있는 깔끔하고 전문적인 디자인을 적용했습니다. 원클릭 상담 예약으로 방문자가 최소한의 단계로 문의를 남길 수 있어 전환율을 극대화했습니다.\n\n모바일 퍼스트 반응형 디자인으로 스마트폰 환자 경험을 최우선으로 고려했으며, 빠른 페이지 로딩과 지역 SEO 최적화로 이탈률 최소화와 지역 검색 상위 노출을 동시에 달성했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
    thumbnail: "/images/gooddoctor/gd_main.webp",
    images: [
      "/images/gooddoctor/gd_landing.webp",
    ],
    link: "",
  },
  {
    id: "busa",
    title: "부자유리 랜딩페이지",
    subtitle: "부자유리 서비스 소개 랜딩페이지",
    category: "Landing Page",
    date: "2024",
    client: "부자유리",
    description:
      "부자유리의 전문성과 신뢰감을 온라인에서 효과적으로 전달하는 랜딩페이지입니다. 유리 시공 업체의 전문 기술력과 시공 경험을 시각적으로 명확하게 표현할 수 있도록 깔끔하고 정돈된 레이아웃을 적용했습니다.\n\n서비스 소개·시공 사례·주요 제품·시공 프로세스·문의 섹션을 체계적으로 배치해 고객이 필요한 정보를 빠르게 확인할 수 있도록 했으며, 풍부한 시공 사례 갤러리로 업체의 실력과 포트폴리오를 효과적으로 전달합니다.\n\n전략적 CTA 배치로 견적 문의와 상담 신청 전환율을 극대화했으며, 모바일 퍼스트 반응형 디자인과 지역 SEO 최적화로 스마트폰 검색 고객 유입과 지역 기반 상위 노출을 동시에 확보했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
    thumbnail: "/images/busa/busa_main.webp",
    images: [
      "/images/busa/busa_landing.webp",
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
      "WAKA 서비스의 핵심 가치를 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 사용자의 시선 흐름을 고려한 섹션 구성으로 서비스의 장점과 차별점을 자연스럽게 인지할 수 있도록 설계했습니다.\n\n라이트 모드와 다크 모드를 모두 지원해 사용자 환경 설정에 맞춘 최적의 시각적 경험을 제공하며, 요금제 비교 페이지로 고객이 자신에게 맞는 플랜을 쉽게 선택할 수 있도록 구현했습니다.\n\n스크롤 기반 인터랙티브 애니메이션으로 탐색 몰입감을 높였고 전략적 CTA 배치로 가입 전환율을 극대화했으며, 반응형 디자인과 3초 이내 완전 로딩, A/B 테스트 가능한 구조로 마케팅 성과를 데이터 기반으로 개선할 수 있습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "ISR", "Vercel Edge"],
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
      "참사랑병원의 따뜻한 의료 철학을 온라인에서 그대로 전달하는 랜딩페이지입니다. 부드러운 색감과 직관적인 레이아웃으로 의료 기관 특유의 딱딱한 느낌을 최소화하고, 방문자에게 편안함과 신뢰감을 동시에 전달합니다.\n\n환자와 보호자가 방문 전 필요한 모든 정보를 한눈에 확인할 수 있도록 진료 과목·의료진 소개·시설 안내·오시는 길을 체계적으로 구성했으며, 온라인 상담 신청 기능으로 별도의 전화 없이 간편하게 문의할 수 있습니다.\n\n모바일 최적화로 스마트폰 검색 환자에게 최상의 경험을 제공하고, 빠른 로딩 속도로 급하게 병원을 찾는 환자의 이탈을 방지하며, 지역 SEO 최적화로 인근 지역 상위 노출까지 달성합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Schema.org", "Web Vitals"],
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
      "Three.js와 Cannon.js 물리엔진을 결합해 웹 브라우저에서 직접 플레이할 수 있는 3D 게임입니다. 실시간 물리 시뮬레이션으로 중력·충돌·마찰 등 현실적인 물리 반응을 구현했으며, 사용자가 로버를 직접 조작하며 지형을 탐험하는 인터랙티브 체험을 제공합니다.\n\nWebGL 기반 고품질 3D 렌더링으로 생동감 있는 환경을 연출하고, 키보드와 마우스를 활용한 직관적인 조작 시스템으로 누구나 쉽게 즐길 수 있습니다. 물리 엔진의 정밀한 충돌 감지와 강체 시뮬레이션으로 사실적인 차량 거동을 재현했습니다.\n\nVite 기반 빠른 빌드 환경과 3D 에셋 최적화로 별도 설치 없이 부드러운 게임 플레이가 가능하며, 게임·시뮬레이션·인터랙티브 교육 등 물리 엔진이 필요한 다양한 웹 프로젝트에 적용 가능한 기술력을 보여줍니다.",
    techStack: ["Three.js", "Cannon.js", "WebGL", "Vite", "R3F", "GLTF", "Shader", "Blender"],
    thumbnail: "/images/popol-bg/content06.webp",
    images: [
      "/images/galaxy/galaxy_service01.webp",
      "/images/galaxy/galaxy_service02.webp",
      "/images/galaxy/galaxy_service03.webp",
      "/images/galaxy/galaxy_service04.webp",
    ],
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
      "LYFT 쇼핑몰의 온라인 존재감과 운영 효율을 극대화하기 위해 랜딩페이지와 관리자 시스템을 통합 제작한 프로젝트입니다. 브랜드의 프리미엄 이미지를 반영한 세련된 디자인과 전략적인 상품·프로모션 배치로 구매 전환을 유도합니다.\n\nCLOUD형 관리자 대시보드에서 상품 등록·재고 관리·주문 처리·매출 분석을 원스톱으로 제공하며, 실시간 데이터 시각화로 매출 트렌드와 고객 행동 패턴을 즉시 파악해 데이터 기반 의사결정을 지원합니다.\n\nAWS EC2·RDS·S3·CloudFront·Route53 기반 클라우드 인프라로 트래픽 급증에도 안정적인 서비스를 보장하며, Material UI 기반 디자인 시스템과 모듈화 아키텍처로 일관성과 확장성을 동시에 확보했습니다.",
    techStack: ["React", "TypeScript", "Material UI", "AWS", "Node.js", "Express", "MongoDB", "Redis"],
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
      "Mercedes-Benz G63의 역동적인 매력을 웹에서 생생하게 체험할 수 있는 Three.js 기반 3D 인터랙티브 쇼케이스입니다. WebGL 실시간 3D 렌더링으로 차량 외관을 360도 탐색할 수 있으며, 내부 인테리어까지 세밀하게 구현해 실제 차량을 눈앞에서 보는 듯한 몰입감을 제공합니다.\n\n차량 바디 컬러 커스터마이징 기능으로 인터랙티브 경험을 극대화했고, GSAP 애니메이션 라이브러리의 부드러운 카메라 전환 효과로 시네마틱한 프레젠테이션을 연출합니다. 스크롤 기반 스토리텔링 구조로 차량의 특징을 자연스럽게 소개합니다.\n\nVite 기반 빠른 개발 환경과 GPU 가속 렌더링 최적화로 다양한 디바이스에서 원활한 3D 경험을 보장하며, 자동차·부동산·제품 등 3D 시각화가 필요한 모든 분야에 적용 가능한 기술력을 보여줍니다.",
    techStack: ["Three.js", "WebGL", "GSAP", "Vite", "R3F", "GLTF", "Shader", "Blender"],
    thumbnail: "/images/g63/g63_main.webp",
    images: [
      "/images/g63/g63_inner.webp",
      "/images/g63/g63_color.webp",
    ],
    link: "https://g63-modeling.vercel.app/",
  },
];

export default projects;
