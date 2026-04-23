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
      "학생과 학부모가 대학 생활을 미리 경험하고 준비할 수 있도록 돕는 미리캠퍼스 서비스의 가치를 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 사용자 여정을 세심하게 설계하여 방문자가 페이지에 접속한 순간부터 서비스의 핵심 가치를 자연스럽게 이해할 수 있도록 섹션별 스토리텔링 구조로 구성했습니다. 친근하고 밝은 톤앤매너의 비주얼과 감각적인 타이포그래피로 젊은 타깃 유저층에게 친화적인 브랜드 이미지를 구축했으며, 서비스 소개, 주요 기능, 이용 방법, 혜택 등을 직관적으로 전달할 수 있도록 정보 구조를 체계적으로 설계했습니다. 회원 가입과 서비스 이용 전환을 유도하는 CTA 버튼을 전략적으로 배치하여 전환율을 극대화했으며, 반응형 디자인을 적용하여 스마트폰 사용이 많은 학생 타깃층에 최적화된 경험을 제공합니다. 스크롤 기반의 인터랙티브 애니메이션으로 페이지 몰입도를 높였고, 빠른 페이지 로딩 속도와 SEO 최적화를 통해 검색 유입과 이탈률 개선을 동시에 달성했습니다. 향후 서비스 확장과 콘텐츠 추가에도 유연하게 대응할 수 있는 구조로 개발되어 지속적인 성장 기반을 마련했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "노본드홈 브랜드의 고유한 정체성과 서비스 가치를 온라인에서 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 방문자가 페이지에 접속한 순간부터 브랜드의 분위기와 메시지를 자연스럽게 체감할 수 있도록 감각적인 비주얼과 세련된 타이포그래피를 활용하여 프리미엄한 인상을 구축했습니다. 서비스 소개, 주요 특징, 이용 방법, 문의 섹션을 체계적으로 배치하여 고객이 필요한 정보를 빠르게 확인할 수 있도록 사용자 여정을 최적화했으며, 브랜드의 신뢰감을 강화하는 스토리텔링 구조로 구성했습니다. 반응형 디자인을 적용하여 데스크톱과 모바일 모든 환경에서 일관된 브랜드 경험을 제공하며, 모바일 퍼스트 설계로 스마트폰 사용자에게도 쾌적한 탐색 환경을 보장합니다. 스크롤 기반의 인터랙티브 애니메이션으로 페이지 몰입도를 높였고, CTA 버튼의 전략적 배치를 통해 문의와 상담 전환율을 극대화했습니다. 페이지 성능 최적화로 빠른 로딩 속도를 달성하여 이탈률을 최소화했으며, SEO 최적화를 통해 관련 키워드 검색 시 상위 노출이 가능하도록 구조화된 마크업을 적용했습니다. 향후 서비스 확장과 콘텐츠 추가에도 유연하게 대응할 수 있는 확장성 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
    id: "aifireguard",
    title: "AI FireGuard",
    subtitle: "AI 기반 실시간 화재 감지 시스템",
    category: "Web Application",
    date: "2025",
    client: "AI FireGuard",
    description:
      "AI FireGuard는 딥러닝 기반의 영상 분석 기술을 활용하여 공장, 산업 시설, 물류 창고 등 화재 위험이 높은 현장을 24시간 실시간으로 모니터링하고 조기에 화재를 감지하는 관제 시스템입니다. 다중 CCTV 카메라 스트림을 동시에 분석하여 화재와 연기 발생을 즉시 식별하며, 감지 정확도 99% 수준의 AI 모델을 적용하여 오탐지를 최소화하고 신속한 대응이 가능하도록 설계했습니다. 실시간 모니터링 대시보드에서는 카메라별 영상, 감지 이벤트, 시스템 성능을 한 화면에서 통합적으로 확인할 수 있으며, 화재 감지 시 긴급 알림이 즉시 발송되어 관리자가 빠르게 상황에 대응할 수 있습니다. 이벤트 기록 페이지에서는 과거 감지 이력을 다각도의 필터로 조회할 수 있으며, 영상 증거 자료와 함께 체계적으로 관리하여 사후 분석과 보고서 작성에 활용할 수 있습니다. 분석 리포트 페이지는 주간/월간 단위로 감지 이벤트의 추이, 카메라별 감지 현황, 피해 감소 추정치 등을 시각화하여 경영진의 의사결정을 지원하며, 도넛 차트와 막대 그래프 등 직관적인 데이터 시각화로 복잡한 분석 결과를 한눈에 파악할 수 있도록 구성했습니다. 다크 테마 기반의 세련된 UI와 명확한 정보 계층 구조로 장시간 모니터링 환경에서도 사용자의 피로도를 최소화하며, 역할 기반 권한 관리와 감사 로그 기능으로 기업 환경의 보안 요구사항을 충족합니다.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "WebRTC"],
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
    id: "medireview",
    title: "메디리뷰",
    subtitle: "의료 서비스 리뷰 플랫폼",
    category: "Service Platform",
    date: "2024",
    client: "메디리뷰",
    description:
      "환자와 의료 소비자가 신뢰할 수 있는 의료 정보를 공유하고 더 나은 의료 선택을 돕기 위해 제작된 메디리뷰 플랫폼입니다. 병원, 의료진, 진료 경험 등에 대한 실제 환자들의 리뷰를 체계적으로 수집하고 투명하게 공개하여 의료 소비자의 합리적인 의사결정을 지원합니다. 직관적인 검색과 필터링 시스템을 통해 사용자가 지역, 진료 과목, 평점 등 다양한 조건으로 원하는 정보를 빠르게 탐색할 수 있으며, 상세 리뷰 페이지에서는 진료 만족도, 대기 시간, 시설 상태 등 구체적인 항목별 평가를 한눈에 확인할 수 있습니다. 검증된 리뷰 작성 프로세스를 통해 허위 후기를 최소화하고 신뢰성을 확보했으며, 의료진과 병원 입장에서도 환자 피드백을 체계적으로 관리하고 서비스 품질 개선에 활용할 수 있는 구조로 설계했습니다. 모바일 퍼스트 반응형 디자인을 적용하여 스마트폰으로 의료 정보를 검색하는 사용자에게 최적화된 경험을 제공하며, 빠른 페이지 로딩과 직관적인 UI/UX로 누구나 쉽게 접근하고 활용할 수 있습니다. SEO 최적화를 통해 의료 관련 검색 시 상위 노출이 가능하도록 구조화된 마크업을 적용했으며, 안정적인 클라우드 인프라 위에서 운영되어 대량의 리뷰 데이터를 안정적으로 처리하고 확장성을 확보했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
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
      "칩포스의 서비스 가치와 브랜드 정체성을 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 방문자가 페이지에 접속한 순간부터 서비스의 핵심 메시지를 직관적으로 파악할 수 있도록 섹션별 스토리텔링 구조로 설계했으며, 세련된 비주얼과 명확한 타이포그래피로 브랜드의 전문성과 신뢰감을 강조했습니다. 서비스 소개, 주요 기능, 이용 방법, 고객 혜택, 문의 섹션을 체계적으로 구성하여 방문자가 필요한 정보를 빠르게 탐색할 수 있도록 정보 구조를 최적화했으며, 풍부한 시각 자료를 통해 복잡한 서비스 내용도 쉽게 이해할 수 있도록 구현했습니다. CTA 버튼의 전략적 배치와 사용자 여정 설계로 문의와 가입 전환율을 극대화했으며, 반응형 디자인을 적용하여 데스크톱과 모바일 모든 환경에서 일관된 브랜드 경험을 제공합니다. 스크롤 기반의 인터랙티브 애니메이션으로 페이지 몰입감을 높였고, 페이지 성능 최적화를 통해 빠른 로딩 속도와 낮은 이탈률을 동시에 달성했습니다. SEO 최적화를 통해 관련 키워드 검색 시 상위 노출이 가능하도록 구조화된 마크업을 적용했으며, 향후 서비스 확장과 콘텐츠 추가에도 유연하게 대응할 수 있는 확장성 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "미래 의료 서비스의 비전과 전문성을 온라인에서 효과적으로 전달하기 위해 제작된 퓨쳐메디컬 랜딩페이지입니다. 의료 기관의 신뢰감과 첨단 기술력을 동시에 표현할 수 있도록 절제된 컬러 팔레트와 세련된 타이포그래피를 활용하여 프리미엄 의료 브랜드의 인상을 구축했습니다. 진료 과목, 의료진 소개, 시설 안내, 오시는 길, 상담 문의 등 환자가 필요로 하는 핵심 정보를 체계적으로 배치하여 방문자가 한눈에 필요한 정보를 확인할 수 있도록 설계했으며, 사용자 여정에 맞춘 정보 계층 구조로 의사결정을 지원합니다. 온라인 상담 예약 기능을 통해 환자가 별도의 전화 없이도 간편하게 진료 문의를 남길 수 있으며, 이는 신규 환자 유입과 상담 전환율 향상에 직접적으로 기여합니다. 모바일 퍼스트 반응형 디자인을 적용하여 스마트폰으로 병원을 검색하는 환자들에게도 최적화된 경험을 제공하며, 빠른 페이지 로딩 속도로 급하게 의료 정보를 찾는 환자의 이탈을 방지합니다. 스크롤 기반의 인터랙티브 애니메이션으로 페이지 몰입감을 높였고, CTA 버튼의 전략적 배치로 예약 및 문의 전환을 극대화했습니다. 지역 SEO 최적화를 통해 관련 검색어 상위 노출을 달성할 수 있도록 구조화된 마크업을 적용했으며, 향후 진료 과목 확장과 콘텐츠 추가에도 유연하게 대응할 수 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "기업과 서비스 제공자의 예약 운영을 자동화하여 운영 효율을 극대화하는 자동 예약 시스템입니다. 수작업으로 이루어지던 예약 접수, 일정 조율, 고객 알림, 취소/변경 처리 등 번거로운 업무 프로세스를 디지털 플랫폼에서 원스톱으로 처리할 수 있도록 구현하여 관리자의 업무 부담을 크게 경감시켰습니다. 실시간 예약 현황 대시보드를 통해 전체 예약 상태를 한눈에 파악할 수 있으며, 시간대별·서비스별 예약 분포를 시각화하여 운영 인사이트를 제공합니다. 고객은 직관적인 UI에서 원하는 서비스와 시간을 선택해 몇 번의 클릭만으로 예약을 완료할 수 있으며, 자동화된 확인 및 리마인더 알림으로 노쇼를 최소화하고 예약 이행률을 높였습니다. 관리자 페이지에서는 예약 승인, 취소, 변경, 고객 메모 등 모든 액션을 세밀하게 제어할 수 있으며, 권한 기반 접근 관리로 조직 구조에 맞춘 맞춤형 운영 환경을 구축했습니다. 분석 리포트 기능을 통해 예약 추이, 인기 시간대, 취소율 등 핵심 지표를 주기적으로 모니터링할 수 있어 데이터 기반의 운영 개선이 가능합니다. 반응형 디자인과 빠른 페이지 로딩 속도로 모바일 환경에서도 쾌적한 사용 경험을 제공하며, 안정적인 클라우드 인프라 위에서 운영되어 대량의 예약 트래픽에도 안정적으로 대응합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
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
      "이사 서비스를 필요로 하는 소비자와 이사 업체를 연결하는 중개형 플랫폼 ESA입니다. 복잡하고 번거로웠던 이사 준비 과정을 디지털로 전환하여, 사용자가 몇 번의 클릭만으로 여러 이사 업체로부터 견적을 받아볼 수 있도록 설계했습니다. 지역, 이사 유형, 일정, 짐의 규모 등 세부 조건을 입력하면 조건에 부합하는 업체들이 매칭되어 경쟁 견적을 제공하며, 사용자는 투명한 가격 비교를 통해 합리적인 선택이 가능합니다. 실제 이용 후기와 평점 시스템을 통해 서비스 품질에 대한 신뢰성을 확보했으며, 예약 관리, 결제, 이사 진행 상황 추적까지 전 과정을 하나의 플랫폼에서 통합적으로 관리할 수 있습니다. 이사 업체 입장에서는 신규 고객 확보와 스케줄 관리 효율화를 동시에 달성할 수 있으며, 관리자 대시보드를 통해 예약 현황, 매출 분석, 고객 리뷰 등을 체계적으로 관리할 수 있습니다. 모바일 퍼스트 반응형 디자인으로 언제 어디서나 편리하게 서비스를 이용할 수 있으며, 직관적인 UI/UX 설계로 IT에 익숙하지 않은 사용자도 쉽게 접근할 수 있도록 구현했습니다. 안정적인 클라우드 인프라 위에서 운영되어 서비스의 신뢰성과 확장성을 동시에 확보했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
    thumbnail: "/images/esa/esa_main.webp",
    images: [
      "/images/esa/esa_landing.webp",
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
      "반려동물과 보호자가 함께하는 건강한 일상을 돕기 위해 제작된 Pawcare 랜딩페이지입니다. 반려동물 케어 서비스의 핵심 가치를 직관적으로 전달할 수 있도록 섹션별 스토리텔링 구조로 설계했으며, 따뜻한 감성의 비주얼과 부드러운 컬러 팔레트로 보호자에게 신뢰감과 친근함을 동시에 전달합니다. 서비스 소개, 이용 방법, 주요 기능 등 핵심 정보를 한눈에 확인할 수 있도록 정보 구조를 최적화하였으며, 보호자가 필요한 정보를 빠르게 찾을 수 있도록 사용자 여정을 세심하게 설계했습니다. 반응형 디자인을 적용하여 데스크톱과 모바일 모두에서 최적의 사용 경험을 제공하며, 스마트폰으로 접속하는 보호자들에게도 쾌적한 탐색 환경을 보장합니다. 스크롤 기반의 인터랙티브 애니메이션으로 페이지 몰입감을 높였으며, CTA 버튼의 전략적 배치로 서비스 가입과 문의 전환율을 극대화했습니다. SEO 최적화와 빠른 로딩 속도로 검색 유입과 이탈률 개선을 동시에 달성했으며, 향후 서비스 확장에도 유연하게 대응할 수 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "바이오 산업에 AI 기술을 접목한 BioAI 서비스의 전문성과 혁신성을 온라인에서 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 복잡한 AI 기술과 바이오 도메인 지식을 일반 사용자도 쉽게 이해할 수 있도록 정보 구조를 단계적으로 설계하였으며, 인포그래픽과 비주얼 요소를 적극 활용하여 기술의 차별점을 직관적으로 시각화했습니다. 서비스의 핵심 가치, 주요 기능, 적용 사례, 기술 우위를 섹션별로 명확하게 구성하여 방문자가 자연스럽게 브랜드 스토리에 몰입할 수 있도록 유도했습니다. 전문성을 강조하는 세련된 타이포그래피와 신뢰감을 주는 컬러 팔레트를 적용하여 B2B 고객과 투자자 모두에게 긍정적인 첫인상을 전달합니다. CTA 버튼의 전략적 배치로 데모 요청과 문의 전환율을 극대화하였으며, 반응형 디자인을 적용하여 데스크톱, 태블릿, 모바일 모든 환경에서 일관된 브랜드 경험을 제공합니다. SEO 최적화와 페이지 성능 튜닝을 통해 검색 유입과 사용자 유지율을 동시에 개선하였으며, 향후 제품 라인업 확장에도 유연하게 대응할 수 있는 확장성 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "스마트 조명 제어 솔루션의 기술력과 편의성을 효과적으로 전달하기 위해 제작된 라이트컨트롤 랜딩페이지입니다. 제품의 핵심 기능과 차별화된 가치를 방문자가 빠르게 이해할 수 있도록 정보의 계층 구조를 단계적으로 설계하였으며, 깔끔하고 모던한 비주얼과 세련된 타이포그래피로 브랜드의 전문성과 혁신성을 강조했습니다. 조명 제어 기술의 복잡한 기능을 직관적인 인포그래픽과 이미지로 시각화하여 일반 소비자와 B2B 고객 모두가 쉽게 이해할 수 있도록 구성했습니다. 제품 소개, 주요 기능, 적용 사례, 기술 스펙, 문의 섹션을 체계적으로 배치하여 고객이 필요한 정보를 빠르게 확인할 수 있으며, CTA 버튼의 전략적 배치를 통해 데모 요청과 견적 문의 전환율을 극대화했습니다. 반응형 디자인을 적용하여 데스크톱, 태블릿, 모바일 모든 환경에서 일관된 브랜드 경험을 제공하며, 페이지 성능 최적화로 빠른 로딩 속도를 달성하여 이탈률을 최소화했습니다. SEO 최적화를 통해 관련 키워드 검색 시 상위 노출이 가능하도록 구조화된 마크업을 적용했으며, 제품 라인업 확장과 신기능 추가에도 유연하게 대응할 수 있는 확장성 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "마사지샵의 프리미엄 힐링 경험을 온라인에서 그대로 전달하기 위해 제작된 랜딩페이지입니다. 방문자가 페이지에 접속하는 순간부터 휴식과 편안함을 느낄 수 있도록 부드러운 색감과 감각적인 비주얼 요소를 활용하여 공간의 분위기를 시각적으로 재현했습니다. 서비스 소개, 코스 안내, 시설 소개, 가격 정보, 예약 문의 등 고객이 실제로 필요로 하는 핵심 정보를 체계적으로 배치하여 빠른 의사결정을 돕도록 설계했습니다. 직관적인 예약 및 상담 신청 플로우를 구현하여 전화 문의 부담 없이 온라인에서 바로 예약을 진행할 수 있으며, 이는 신규 고객 전환율 향상에 직접적으로 기여합니다. 모바일 퍼스트 반응형 디자인으로 스마트폰에서 지역 검색을 통해 유입되는 고객에게 최적화된 경험을 제공하며, 빠른 페이지 로딩 속도로 이탈률을 최소화했습니다. 지역 SEO 최적화를 적용하여 인근 지역 검색 시 상위 노출이 가능하도록 구조화된 마크업을 구현했으며, 프로모션과 시즌별 이벤트를 유연하게 반영할 수 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "의료 서비스의 접근성을 높이기 위해 기획된 굿닥터 랜딩페이지입니다. 환자가 필요한 의료 정보를 빠르게 찾고, 간편하게 상담을 신청할 수 있도록 사용자 여정을 최적화하여 설계했습니다. 의료진 소개, 진료 과목 안내, 오시는 길 등 핵심 정보를 시각적으로 명확하게 전달하며, 신뢰감을 줄 수 있는 깔끔하고 전문적인 디자인을 적용했습니다. 원클릭 상담 예약 기능을 통해 방문자가 최소한의 단계로 문의를 남길 수 있어 전환율을 극대화했습니다. 모바일 퍼스트 반응형 디자인으로 스마트폰에서의 사용 경험을 최우선으로 고려했으며, 페이지 로딩 속도 최적화로 이탈률을 최소화했습니다. SEO 최적화를 통해 지역 검색에서 상위 노출될 수 있도록 구조화된 마크업을 적용했으며, 향후 콘텐츠 확장에도 유연하게 대응할 수 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      "부자유리의 전문성과 신뢰감을 온라인에서 효과적으로 전달하기 위해 제작된 랜딩페이지입니다. 유리 시공 업체의 전문 기술력과 시공 경험을 시각적으로 명확하게 표현할 수 있도록 깔끔하고 정돈된 레이아웃과 세련된 타이포그래피를 적용하여 브랜드의 신뢰감을 강화했습니다. 서비스 소개, 시공 사례, 주요 제품, 시공 프로세스, 문의 섹션을 체계적으로 배치하여 고객이 필요한 정보를 빠르게 확인할 수 있도록 정보 구조를 최적화했으며, 풍부한 시공 사례 갤러리를 통해 업체의 실력과 포트폴리오를 방문자에게 효과적으로 전달합니다. 견적 문의와 상담 신청을 유도하는 CTA 버튼을 전략적으로 배치하여 신규 고객 유입과 전환율을 극대화했으며, 모바일 퍼스트 반응형 디자인을 적용하여 스마트폰으로 업체를 검색하는 고객에게도 최적화된 경험을 제공합니다. 빠른 페이지 로딩 속도와 SEO 최적화를 통해 검색 유입과 이탈률 개선을 동시에 달성했으며, 지역 기반 검색에서 상위 노출이 가능하도록 구조화된 마크업을 적용했습니다. 향후 시공 사례 추가와 콘텐츠 확장에도 유연하게 대응할 수 있는 확장성 있는 구조로 개발되었습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
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
];

export default projects;
