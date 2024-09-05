"use client";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5; /* Light, subtle background for Ghibli-like aesthetic */
    color: #333;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

const Header = styled.header`
  background-color: #8bc34a; /* Soft green for a nature, Ghibli feel */
  padding: 16px;
  text-align: center;
  font-size: 2rem;
  color: white;
`;

const Footer = styled.footer`
  background-color: #8bc34a;
  padding: 16px;
  text-align: center;
  font-size: 1rem;
  color: white;
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
        <Footer>© 2024 Magical Recipe Book - All rights reserved</Footer>
      </body>
    </html>
  );
}
