"use client";
import React from "react";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";
import { Amatic_SC, Josefin_Sans } from "next/font/google";

export const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400" });
export const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
  min-height: 100vh;
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
  }
  
  h1, h2, h3 {
    font-family: ${amaticSC.style.fontFamily};
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Header = styled.header`
  background: #a5d6a7;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: #81c784;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: ${amaticSC.style.fontFamily};
    font-size: 3.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media (max-width: 480px) {
      font-size: 2.2rem;
    }
  }
`;

const Container = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const Footer = styled.footer`
  background: #a5d6a7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  color: white;
  font-family: ${amaticSC.style.fontFamily};
  text-align: center;
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
          <Link href="/">
            <h1>Ghibli Inspired Recipe Book</h1>
          </Link>
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
