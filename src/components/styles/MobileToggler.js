import styled from "styled-components";

export const MobileToggler = styled.button`
  padding: 5px 7px;
  color: ${props => props.theme.white};
  text-decoration: none;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;

  svg {
    margin-top: 2px;
    width: 2rem;
    height: 2rem;
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
