"use client";
import React from "react";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";
import { Caveat, Josefin_Sans, Amatic_SC } from "next/font/google";

export const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "400" });
export const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
  min-height: 100%;
  width:100%
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  }

  body {
    font-family: ${josefinSans.style.fontFamily};
    background: linear-gradient(135deg, #e0f7fa, #b9fbc0); 
    color: #333;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-family: ${amaticSC.style.fontFamily};
    color: #222;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1.2;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  main {
    flex: 1;
  }
`;

// Layout Components
const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Header = styled.header`
  background: #a5d6a7;
  padding: 1rem;
  font-size: 2.5rem;
  text-align: center;
  font-family: ${amaticSC.style.fontFamily};
  color: white;

  a {
    display: inline-block;
    width: 100%;
    transition: background 0.3s;
  }

  &:hover {
    background: #81c784;
  }
`;

const Footer = styled.footer`
  background: #a5d6a7;
  text-align: center;
  font-size: 1rem;
  color: white;
  font-family: ${amaticSC.style.fontFamily};
`;
const metadata = {
  title: "Ghibli Recipe Book",
  description: "Recipes inspired by Studio Ghibli movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <Header role="banner">
          <Link href="/">Ghibli Inspired Recipe Book</Link>
        </Header>
        <Container>{children}</Container>
        <Footer>
          This is a fan-made project inspired by the films of Studio Ghibli. All
          trademarks and copyrights belong to their respective owners.
        </Footer>
      </body>
    </html>
  );
}
