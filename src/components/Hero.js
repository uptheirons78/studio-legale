import React from "react";
import styled from "styled-components";

const Hero = ({ img, titleLeft, titleRight }) => {
  const heroStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <HeroSection style={heroStyle}>
      <div className="title-container">
        <h1>
          {titleLeft} <span>{titleRight}</span>
        </h1>
      </div>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 40vh;
  position: relative;
  z-index: -1;

  .title-container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: ${props => props.theme.white};
      font-size: 5rem;
      text-transform: uppercase;

      @media (max-width: 1100px) {
        font-size: 4rem;
      }
      @media (max-width: 600px) {
        font-size: 3rem;
      }

      span {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
`;
