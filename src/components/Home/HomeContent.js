import styled from "styled-components";

const HomeContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .home-main-container {
    grid-column-start: span 2;
    padding: 1rem;
    text-align: justify;
  }

  .home-aside {
    grid-column-start: span 1;
    padding: 0.7rem 2rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 900px) {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-left: none;
      padding: 3rem 1rem;
    }
  }
`;

export default HomeContent;
