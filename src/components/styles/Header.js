import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "Open Sans", sans-serif;
  background: #0a0a0a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  transition: all 350ms ease-in-out;

  @media (max-width: 1100px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }

  .logo {
    img {
      width: 30rem;

      @media (max-width: 1200px) {
        width: 27rem;
      }
    }
  }

  nav {
    @media (max-width: 900px) {
      margin-top: 1rem;
      display: none;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;

      @media (max-width: 900px) {
        flex-direction: column;
        padding: 1rem;
      }
      li {
        margin-right: 1rem;

        @media (max-width: 900px) {
          margin-right: 0;
          margin-top: 1rem;
        }
      }
      a {
        font-size: 1.2rem;
        color: ${props => props.theme.white};
        text-transform: uppercase;
        font-weight: 700;
      }
    }

    .flag {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 900px) {
        margin-top: 2rem;
      }
      img {
        width: 24px;
        height: 16px;
      }
    }
  }

  &.header.open {
    nav {
      display: block;
    }
  }
`;
