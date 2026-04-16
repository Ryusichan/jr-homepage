import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const slideOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const Overlay = styled.div<{ phase: "enter" | "hold" | "exit" | "idle" }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ phase }) => (phase === "idle" ? "none" : "all")};
  visibility: ${({ phase }) => (phase === "idle" ? "hidden" : "visible")};
  animation: ${({ phase }) =>
      phase === "enter"
        ? slideIn
        : phase === "exit"
        ? slideOut
        : "none"}
    0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const PageTransition = () => {
  const router = useRouter();
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "idle">(
    "idle"
  );
  const enterDone = useRef(false);
  const routeDone = useRef(false);

  useEffect(() => {
    const tryExit = () => {
      // 슬라이드 인 애니메이션 완료 + 라우트 전환 완료 둘 다 되어야 exit
      if (enterDone.current && routeDone.current) {
        // 최소 로딩 표시 시간 보장 후 exit
        setTimeout(() => {
          setPhase("exit");
          setTimeout(() => {
            setPhase("idle");
            enterDone.current = false;
            routeDone.current = false;
          }, 500);
        }, 400);
      }
    };

    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        enterDone.current = false;
        routeDone.current = false;
        setPhase("enter");

        // 슬라이드 인 애니메이션 완료 (0.5s) 후 플래그
        setTimeout(() => {
          enterDone.current = true;
          setPhase("hold");
          tryExit();
        }, 500);
      }
    };

    const handleComplete = () => {
      routeDone.current = true;
      tryExit();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (phase === "idle") return null;

  return (
    <Overlay phase={phase}>
      <Spinner />
      <LoadingText>Loading</LoadingText>
    </Overlay>
  );
};

export default PageTransition;
