"use client";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Caveat, Josefin_Sans, Amatic_SC } from "next/font/google";

export const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "400" });
export const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${josefinSans.style.fontFamily}, cursive;
    background: linear-gradient(135deg, #e0f7fa, #b9fbc0); 
    color: #333;
  }

  h1, h2, h3 {
    font-family: ${amaticSC.style.fontFamily}, cursive;
    color: #222;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// Styled-components for layout elements
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Header = styled.header`
  background: #a5d6a7;
  padding: 20px;
  text-align: center;
  font-size: 2.5rem;
  font-family: ${amaticSC.style.fontFamily}, cursive;
  color: white;
`;

const Footer = styled.footer`
  background: #a5d6a7;
  text-align: center;
  padding: 16px;
  font-size: 1rem;
  color: white;
  font-family: ${amaticSC.style.fontFamily}, cursive;
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
        <Header>Ghibli Recipe Book</Header>
        <Container>{children}</Container>
        <Footer>
          © 2024 Ghibli Movies Inspired Recipes - All rights reserved
        </Footer>
      </body>
    </html>
  );
}
