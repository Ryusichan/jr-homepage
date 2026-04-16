import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const blurIn = keyframes`
  from {
    backdrop-filter: blur(0px);
    background: rgba(0, 0, 0, 0);
  }
  to {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.5);
  }
`;

const blurOut = keyframes`
  from {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
  to {
    backdrop-filter: blur(0px);
    background: rgba(0, 0, 0, 0);
    opacity: 0;
  }
`;

const Overlay = styled.div<{ phase: "enter" | "hold" | "exit" | "idle" }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ phase }) => (phase === "idle" ? "none" : "all")};
  visibility: ${({ phase }) => (phase === "idle" ? "hidden" : "visible")};
  backdrop-filter: ${({ phase }) =>
    phase === "hold" ? "blur(20px)" : "blur(0px)"};
  background: ${({ phase }) =>
    phase === "hold" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  animation: ${({ phase }) =>
      phase === "enter"
        ? blurIn
        : phase === "exit"
        ? blurOut
        : "none"}
    0.4s ease forwards;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const SpinnerWrap = styled.div<{ phase: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s ease 0.2s both;
`;

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.25em;
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
      if (enterDone.current && routeDone.current) {
        setTimeout(() => {
          setPhase("exit");
          setTimeout(() => {
            setPhase("idle");
            enterDone.current = false;
            routeDone.current = false;
          }, 400);
        }, 200);
      }
    };

    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        enterDone.current = false;
        routeDone.current = false;
        setPhase("enter");

        setTimeout(() => {
          enterDone.current = true;
          setPhase("hold");
          tryExit();
        }, 400);
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
      <SpinnerWrap phase={phase}>
        <Spinner />
        <LoadingText>Loading</LoadingText>
      </SpinnerWrap>
    </Overlay>
  );
};

export default PageTransition;
