import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  background-color: #a5d6a7;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 12px;
  transition-duration: 0.2s;
  &: hover {
    background-color: #04aa6d; /* Green */
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const BackButton = ({ url }) => {
  return (
    <Link href={url}>
      <Button>Back</Button>
    </Link>
  );
};

export default BackButton;
