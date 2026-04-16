import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const slideOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const Overlay = styled.div<{ phase: "enter" | "exit" | "idle" }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ phase }) => (phase === "idle" ? "none" : "all")};
  opacity: ${({ phase }) => (phase === "idle" ? 0 : 1)};
  animation: ${({ phase }) =>
      phase === "enter" ? slideIn : phase === "exit" ? slideOut : "none"}
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
  const [phase, setPhase] = useState<"enter" | "exit" | "idle">("idle");

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setPhase("enter");
      }
    };

    const handleComplete = () => {
      setTimeout(() => {
        setPhase("exit");
        setTimeout(() => setPhase("idle"), 500);
      }, 300);
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
