import { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    title: "[네오스튜디오 2 (MAUI 기반 크로스플랫폼 하이브리드 앱)]",
    description:
      "기존 네이티브 앱의 MAUI & React 기반 하이브리드 앱 전환 프로젝트. 스마트펜 기반 필기 앱으로, 웹뷰와 네이티브 간 안정적인 연동, 데이터 동기화, Canvas 렌더링 등 다양한 기술적 과제 해결",
    tech: [
      "React",
      "TypeScript",
      "MobX",
      "MAUI",
      "C#",
      "TanStack-Query",
      "Styled-Components",
      "MUI",
      "Canvas API",
      "Web Worker",
      "BLE",
    ],
    image: "/images/neostudio2.jpg",
    demo: "https://neostudio2.io",
    type: "company",
    features: [
      {
        id: "neostudio2-native-bridge",
        title: "React 웹뷰-MAUI 네이티브 브릿지 설계 및 안정화",
        situation:
          "React 웹뷰와 MAUI 네이티브 환경 간의 API 제약사항 및 라이브러리 간 상호작용 문제로 인해 크로스플랫폼에서 일관된 네이티브 기능 구현에 어려움이 있었습니다.",
        task: "플랫폼별 차이점을 고려하여 안정적인 브릿지 로직을 설계하고, 크로스플랫폼 환경에서의 사용자 경험 일관성 및 기능 안정성을 확보해야 했습니다.",
        action: [
          "JsInterop 대용량 데이터 전송 시 브라우저 리프레시 문제 해결을 위한 청크 분할 시스템 구현",
          "MUI 컴포넌트 클래스네임 충돌 문제 해결을 위한 별도 CSS 설정 및 스타일 격리",
          "C# 문화권별 데이터 파싱 이슈 해결",
          "CommunityToolKit/Xamarin 버전 호환성 문제 해결 및 의존성 관리",
          "플랫폼별(Android, iOS) API 제약사항 분석 및 브릿지 로직 개발(녹음, 공유, 푸시)",
        ],
        result:
          "안정적인 브릿지 구현으로 크로스플랫폼 사용자 경험 일관성을 확보하였습니다.",
        videoUrl: "/videos/neostudio2-bridge.mp4",
      },
      {
        id: "neostudio2-data-migration",
        title:
          "Google API 정책 제한에 따른 사용자 데이터 마이그레이션 전략 개선",
        situation:
          "사용자 데이터 마이그레이션 구현 중 Google API/OAuth의 예상치 못한 정책 제한(외부 인증 요구 등)에 직면하여 기존 계획을 수정해야 했습니다.",
        task: "변경된 API 정책에 대응하면서도 사용자 경험을 해치지 않는 안정적인 데이터 마이그레이션 방식을 구현해야 했습니다.",
        action: [
          "Google API 의존성을 제거하고 자체 서버 기반 마이그레이션 방식으로 전환",
          "파일 전송 방식 대신 직접 데이터 POST 방식으로 UX 개선",
          "단계별 데이터 검증 로직으로 마이그레이션 안정성 확보",
        ],
        result:
          "자체 서버 기반 방식으로 안정적인 마이그레이션을 완료하여, 마이그레이션 관련 CS 건을 감소시켰습니다.",
        videoUrl: "/videos/neostudio2-migration.mp4",
      },
      {
        id: "neostudio2-data-sync",
        title: "LocalDB-서버 간 데이터 동기화 안정성 확보",
        situation:
          "LocalDB와 서버 간 데이터 동기화 과정에서 발생하는 고질적인 데이터 유실 및 충돌 오류로 인해 사용자 데이터 무결성에 문제가 있었습니다.",
        task: "QA팀과 협력하여 동기화 결함을 체계적으로 추적하고 수정하여 데이터 동기화 안정성을 대폭 향상시켜야 했습니다.",
        action: [
          "QA팀과 수개월간 긴밀한 협력을 통한 체계적인 결함 재현 및 분석",
          "네트워크 오류 발생 시 자동 재시도 및 대기시간 조절 로직 구현",
        ],
        result:
          "데이터 동기화 안정성을 대폭 향상시켜 사용자 데이터 무결성을 확보하고, 동기화 관련 CS 건을 감소시켰습니다.",
      },
      {
        id: "neostudio2-media-autoplay",
        title: "하이브리드 앱 환경에서 인앱 미디어 자동 재생 기능 구현",
        situation:
          "하이브리드 앱 환경에서 인앱 미디어 자동 재생 구현 시 플랫폼별 정책 차이, GDrive 영상 로딩 성능 저하 등의 기술적 난제가 발생했습니다.",
        task: "플랫폼별 제약사항을 극복하고 웹/앱 양단에서 안정적인 미디어 재생 기능을 제공하여 신규 비즈니스 모델 도입 기반을 마련해야 했습니다.",
        action: [
          "플랫폼별(Android, iOS, Web) 미디어 자동재생 제약사항 분석 및 우회 로직 구현",
          "GDrive API 최적화 및 캐싱을 통한 영상 로딩 성능 개선",
          "커스텀 미디어 플레이어 UI 개발로 고객사 요구사항 충족",
        ],
        result:
          "웹/앱 양단에서 안정적인 미디어 자동 재생 기능을 성공적으로 구현하여 신규 비즈니스 모델 도입 기반을 마련하고, 미디어 로딩 속도를 60% 개선했습니다.",
        videoUrl: "/videos/neostudio2-media.mp4",
      },
      {
        id: "neostudio2-canvas-text-editor",
        title: "Canvas 기반 서식 있는 텍스트 편집 및 렌더링 시스템 구현",
        situation:
          "Canvas 애플리케이션에서 Quill 에디터를 연동한 서식 있는 텍스트 입력 기능 구현 시, 다양한 환경(Canvas, Web Worker, PDF)에서의 렌더링 일관성 문제가 발생했습니다.",
        task: "편집된 텍스트를 Canvas에 시각적으로 동일하게 렌더링하고, Web Worker(OffscreenCanvas) 및 PDF 환경에서도 정확한 썸네일 생성이 가능하도록 렌더링 이슈를 해결해야 했습니다.",
        action: [
          "서식 있는 텍스트(볼드, 이탤릭 등)를 Canvas에 동일하게 그리는 변환 시스템 개발",
          "CJK(한중일) 폰트 렌더링 및 라인 브레이크 처리 로직 구현",
          "Web Worker 환경에서의 OffscreenCanvas 기반 렌더링 시스템 구축",
          "PDF(pdf-lib) 환경에서의 텍스트 렌더링 호환성 확보 및 DOM 파싱 이슈 해결",
        ],
        result:
          "Canvas, Web Worker, PDF 환경에서 일관된 서식 있는 텍스트 렌더링을 구현하여 사용자 편집 경험을 크게 향상시켰습니다.",
        videoUrl: "/videos/neostudio2-canvas.mp4",
      },
    ],
  },
  {
    title: "[네오스튜디오] 웹 버전 드로잉 기능 추가 및 서버 마이그레이션",
    description:
      "기존 네오스튜디오 웹 애플리케이션에 드로잉 기능을 추가하고, Firebase에서 자체 서버로 마이그레이션을 수행한 프로젝트. 실시간 협업 드로잉, 성능 최적화 통해 사용자 경험을 개선",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Fabric.js",
      "Canvas API",
      "MUI",
      "WebSocket",
      "BLE",
      "Firebase",
    ],
    image: "/images/webneo.jpg",
    type: "company",
    features: [
      {
        id: "neostudio-web-realtime-drawing",
        title: "Canvas API 기반 실시간 드로잉 및 편집 기능 구현",
        situation:
          "기존 네오스튜디오 웹 버전에는 드로잉 기능이 없어 사용자들이 제한적인 기능만 활용할 수 있었습니다.",
        task: "Canvas API와 Fabric.js를 활용하여 실시간 드로잉 및 편집 기능을 구현하고, 다중 사용자 환경에서 안정적인 협업이 가능하도록 해야 했습니다.",
        action: [
          "Fabric.js 기반 Canvas 드로잉 엔진 구축 및 다양한 브러시 툴 구현",
          "실시간 협업을 위한 WebSocket 통신 및 드로잉 데이터 동기화 시스템 구현",
        ],
        result:
          "실시간 드로잉 기능으로 사용자 참여도 및 웹 버전 활용률이 향상되어 플랫폼 가치를 확장했습니다.",
      },
      {
        id: "neostudio-web-websocket-optimization",
        title: "WebSocket 실시간 공유 시 메시지 순서 보장 문제 해결",
        situation:
          "WebSocket을 통한 실시간 드로잉 공유 시 네트워크 지연과 메시지 전송 순서 오류로 인해 드로잉이 부정확하게 동기화되는 문제가 발생했습니다.",
        task: "메시지 순서 오류로 인한 드로잉 부정확성 문제를 해결하여 실시간 협업 환경에서 정확한 드로잉 동기화를 보장해야 했습니다.",
        action: [
          "시퀀스 번호 기반 메시지 프로토콜 설계 및 구현",
          "수신 메시지 정렬 로직 개발로 순서 보장 메커니즘 구축",
        ],
        result:
          "메시지 순서 보장으로 실시간 드로잉 동기화 정확도를 향상시켰습니다.",
      },
      {
        id: "neostudio-web-memory-optimization",
        title: "대량 썸네일 로딩 시 Out of Memory 문제 해결",
        situation:
          "수백 개의 썸네일을 동시에 로딩할 때 메모리 누수로 인한 Out of Memory 에러가 발생하여 페이지가 불안정해지는 문제가 있었습니다.",
        task: "대량의 썸네일 데이터 처리 시 메모리 사용량을 최적화하고, 안정적인 페이지 로딩을 보장해야 했습니다.",
        action: [
          "썸네일 로딩 시 변수 참조 명시적 해제(null 할당)로 가비지 컬렉션 유도",
          "windowing 기법으로 viewport 영역 썸네일만 렌더링하여 메모리 사용량 최적화",
        ],
        result:
          "메모리 최적화로 대량 썸네일 로딩 시 메모리 사용량을 절감하여 Out of Memory 에러를 완전히 해결하였습니다.",
        videoUrl: "/videos/neostudio-web-memory.mp4",
      },
      {
        id: "neostudio-web-server-migration",
        title: "Firebase에서 자체 서버로의 백엔드 마이그레이션",
        situation:
          "Firebase 사용 비용 증가와 기능 제약으로 인해 자체 서버로의 마이그레이션이 필요했지만, 기존 데이터와 API 호환성을 유지해야 하는 복잡한 상황이었습니다.",
        task: "Firebase에서 자체 서버로 백엔드가 변경되면서 클라이언트 측 API 연동을 새로운 서버에 맞춰 구현해야 했습니다.",
        action: [
          "기존 Firebase SDK 호출을 자체 서버 API로 변경하는 클라이언트 로직 구현",
          "새로운 API 스펙에 맞춘 데이터 처리 및 에러 핸들링 로직 개발",
        ],
        result:
          "새로운 서버 API와의 안정적인 연동을 구현하여 기존 사용자 경험을 유지했습니다.",
      },
    ],
  },
  {
    title: "[PenSDK] 웹용 SDK의 유지보수 및 프로토콜 확장",
    description:
      "JavaScript 기반 네오스마트펜을 활용하기 위한 SDK의 유지보수 및 신규 프로토콜 추가 프로젝트. 복잡한 SDK 사용법으로 인한 고객사 지원 문의 증가 문제를 해결하고, 개발자 경험을 개선",
    tech: ["JavaScript", "Canvas API", "Firebase", "BLE"],
    image: "/images/sdk.jpg",
    type: "company",
    features: [
      {
        id: "pen-sdk-interactive-samples",
        title: "직관적인 인터랙티브 샘플 페이지 개발 및 개발자 경험 개선",
        situation:
          "복잡한 SDK 사용법과 부족한 문서화로 인해 고객사에서 기술 지원 문의가 지속적으로 증가하고, SDK 도입 장벽이 높아지는 문제가 발생했습니다.",
        task: "고객사 개발자들이 쉽게 SDK를 이해하고 활용할 수 있도록 직관적인 가이드와 샘플을 제공하여 기술 지원 부담을 줄이고 개발 효율성을 향상시켜야 했습니다.",
        action: [
          "실제 사용 시나리오 기반의 인터랙티브 샘플 페이지 개발",
          "API 레퍼런스 문서 개선",
        ],
        result:
          "직관적인 샘플 페이지와 가이드 제공으로 고객사 개발 시간을 단축시키고, 기술 지원 문의를 감소시켰습니다.",
      },
    ],
  },
  {
    title: "[BusTracker] 좌석버스 잔여석 통계 조회 사이트",
    description:
      "공공API와 요일제 시스템을 활용한 좌석버스 잔여석 통계 서비스. 출퇴근 시간대 좌석 여유도를 미리 확인할 수 있는 데이터 기반 솔루션",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel", "Supabase"],
    image: "/images/bus.png",
    demo: "https://busseatstracker.vercel.app/",
    github: "https://github.com/SIML-Seo/bus-seat-tracker",
    type: "personal",
    features: [
      {
        id: "bus-tracker-api-optimization",
        title: "공공API 호출 제한 극복을 위한 요일제 데이터 수집 시스템 설계",
        situation:
          "좌석버스 이용 시 언제 타야 여유좌석이 있는지 알 수 있는 서비스가 없었고, 공공API 일일 호출 제한(1만건)으로 414대 좌석버스를 실시간 모니터링하기 어려웠습니다.",
        task: "제한된 API 호출로 의미 있는 좌석버스 통계 데이터를 수집하고, 출퇴근 시간대 좌석 여유도를 예측할 수 있는 시스템을 구축해야 했습니다.",
        action: [
          "버스 노선 ID 끝자리 기반 5개 그룹 요일제 시스템 설계(5부제)",
          "시간대별 차등 수집 로직 구현 (출퇴근시간 3분마다, 나머지 18분마다)",
          "운영시간 최적화 (06시-22시) 및 공휴일 제외 로직 추가",
          "Supabase Database 연동으로 통계 데이터 저장 및 Storage 활용 로그 관리",
        ],
        result:
          "API 호출 제한 내에서 효율적인 데이터 수집이 가능해져 출퇴근 시간대 좌석버스 이용 패턴 분석 데이터를 성공적으로 구축했습니다.",
        videoUrl: "/projects/bus-tracker-system.mp4",
      },
      {
        id: "bus-tracker-data-analysis",
        title: "정류장별 잔여석 통계 분석 및 시각화 구현",
        situation:
          "수집된 좌석버스 데이터를 사용자가 쉽게 이해할 수 있도록 가공하고, 특정 정류장에서 언제 타야 좌석을 확보할 수 있는지에 대한 인사이트가 필요했습니다.",
        task: "각 정류장별 시간대별 잔여석 데이터를 분석하여 사용자가 출퇴근 계획을 세울 수 있는 직관적인 통계 정보를 제공해야 했습니다.",
        action: [
          "정류장별 시간대별 평균 잔여석 계산 알고리즘 구현",
          "Next.js와 TailwindCSS 기반 반응형 데이터 시각화 UI 개발",
        ],
        result:
          "사용자가 원하는 정류장과 시간대에 좌석 여유도를 미리 확인할 수 있게 되어 출퇴근 계획 수립에 실질적인 도움을 제공했습니다.",
        videoUrl: "/projects/bus-tracker-analysis.mp4",
      },
    ],
  },
  {
    title: "[개인 포트폴리오 사이트] 포트폴리오 웹사이트",
    description:
      "개인 포트폴리오 웹사이트. Next.js 를 활용한 모던한 UI/UX와 반응형 디자인을 구현",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide React"],
    image: "/images/portfolio.jpg",
    demo: "https://siml-portfolio.vercel.app",
    github: "https://github.com/Wonho-SIML/siml-portfolio",
    type: "personal",
    features: [
      {
        id: "portfolio-ux-design",
        title: "사용자 경험 중심의 인터랙티브 UI/UX 설계",
        situation:
          "단순한 정적 포트폴리오가 아닌, 방문자가 인상적으로 기억할 수 있는 인터랙티브한 사용자 경험을 제공해야 했습니다.",
        task: "스크롤 기반 애니메이션, 인터랙티브 캔버스, 캐러셀 등을 활용하여 몰입감 있는 사용자 경험을 구현해야 했습니다.",
        action: [
          "Intersection Observer API 기반 스크롤 애니메이션 시스템 구현",
          "Canvas API 기반 실시간 파티클 시스템 및 마우스 인터랙션 구현",
          "반응형 네비게이션 및 모바일 최적화",
        ],
        result:
          "방문자가 직관적이고 인상적으로 포트폴리오를 탐색할 수 있는 인터랙티브한 사용자 경험을 성공적으로 구현했습니다.",
        videoUrl: "/projects/portfolio-ux.mp4",
      },
    ],
  },
];
