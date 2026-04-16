import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

/* ── 상단 바 ── */
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

const Logo = styled.a`
  font-family: monospace;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: #fff;
  text-decoration: none;
  z-index: 110;
  cursor: pointer;
`;

/* ── 햄버거 버튼 ── */
const MenuButton = styled.button<{ isOpen: boolean }>`
  width: 36px;
  height: 24px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 110;
  padding: 0;

  span {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);

    &:nth-child(1) {
      top: ${({ isOpen }) => (isOpen ? "11px" : "0")};
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
    }

    &:nth-child(2) {
      top: 11px;
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      top: ${({ isOpen }) => (isOpen ? "11px" : "22px")};
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
    }
  }
`;

/* ── 풀스크린 오버레이 메뉴 ── */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: #0a0a0a;
  z-index: 105;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 48px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NavItem = styled.a<{ delay: number; isOpen: boolean }>`
  font-size: 3.5rem;
  font-weight: 600;
  color: #555;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
  line-height: 1.4;
  opacity: 0;
  animation: ${({ isOpen }) => (isOpen ? slideUp : "none")} 0.6s
    cubic-bezier(0.33, 1, 0.68, 1) forwards;
  animation-delay: ${({ delay }) => delay}s;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const OverlayFooter = styled.div`
  position: absolute;
  bottom: 40px;
  right: 48px;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    right: 24px;
    bottom: 32px;
  }
`;

const FooterLink = styled.a`
  font-size: 0.8rem;
  color: #444;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "EXPERIENCE", href: "/#" },
  { label: "CONTACT", href: "mailto:godtheenell@gmail.com" },
];

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Header>
        <Link href="/">
          <Logo onClick={() => setIsOpen(false)}>Pluton</Logo>
        </Link>

        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </MenuButton>
      </Header>

      <Overlay isOpen={isOpen}>
        <Nav>
          {menuItems.map((item, idx) => (
            <Link key={item.label} href={item.href}>
              <NavItem
                delay={0.1 + idx * 0.08}
                isOpen={isOpen}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavItem>
            </Link>
          ))}
        </Nav>

        <OverlayFooter>
          <FooterLink
            href="https://velog.io/@godtheenell"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velog
          </FooterLink>
          <FooterLink href="mailto:godtheenell@gmail.com">
            godtheenell@gmail.com
          </FooterLink>
        </OverlayFooter>
      </Overlay>
    </>
  );
};

export default Appbar;
