import React from "react";
import styled from "styled-components";

const TitleContainer = ({ titleLeft, titleRight }) => {
  return (
    <StyledTitleContainer className="title-container">
      <h1>
        {titleLeft} <span>{titleRight}</span>
      </h1>
    </StyledTitleContainer>
  );
};

export default TitleContainer;

const StyledTitleContainer = styled.div`
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
`;
