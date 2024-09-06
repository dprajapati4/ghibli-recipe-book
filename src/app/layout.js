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
    background-color: #f5f5f5; /* Light, soft background for Ghibli aesthetic */
    color: #333;
  }

  h1, h2, h3 {
    font-family: ${amaticSC.style.fontFamily}, cursive;
    color: #333;
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
  padding: 16px;
`;

const Header = styled.header`
  background-color: #8bc34a;
  padding: 20px;
  text-align: center;
  font-size: 2.5rem;
  font-family: ${amaticSC.style.fontFamily}, cursive;
  color: white;
`;

const Footer = styled.footer`
  background-color: #8bc34a;
  text-align: center;
  padding: 16px;
  font-size: 1rem;
  color: white;
  font-family: "Caveat", cursive;
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
