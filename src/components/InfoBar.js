import React from "react";
import styled from "styled-components";
import { FaPhone, FaFax, FaEnvelope } from "react-icons/fa";

const InfoBar = () => {
  return (
    <Info>
      <span className="info-item">
        <FaPhone /> 06.483694
      </span>
      <span className="info-item">
        <FaFax /> 06.45765396
      </span>
      <span className="info-item">
        <FaEnvelope /> info@studiobarberio.org
      </span>
    </Info>
  );
};

export default InfoBar;

const Info = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  color: ${props => props.theme.white};
  background: ${props => props.theme.primaryColor};
  height: 3rem;
  padding: 0.3rem 3rem;

  @media (max-width: 1100px) {
    padding: 0.3rem 1rem;
  }
  @media (max-width: 900px) {
    display: none;
  }

  .info-item {
    margin-right: 2rem;

    svg {
      transform: translateY(2px);
      margin-right: 0.3rem;
    }
  }
`;
