import React from "react";
import styled from "styled-components";
import LibroImage from "./LibroImage";
import LauraImage from "./LauraImage";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Aside = () => {
  return (
    <StyledAside className="home-aside">
      <div className="sidebar-widget">
        <h4>Il Diritto degli Stranieri</h4>
        <LibroImage />
      </div>
      <div className="sidebar-widget">
        <h4>News</h4>
        <p>
          L’Avv. Laura Barberio è membro del Comitato scientifico e relatrice
          nell’ambito del{" "}
          <strong>Corso di aggiornamento per avvocati immigrazionisti </strong>
          promosso dall’Ordine degli Avvocati di Roma. Il corso si svolge ogni
          lunedì presso la Corte di Cassazione dalle ore 15.30 alle ore 18.30.
          Per ulteriori approfondimenti è possibile consultare il{" "}
          <strong>PROGRAMMA </strong> del convegno.
        </p>
      </div>
      <div className="sidebar-widget">
        <h4>Avv. Laura Barberio</h4>
        <LauraImage />
      </div>
      <div className="sidebar-widget">
        <h4>Seguici</h4>
        <ul className="social-container">
          <li className="social-link social-link__facebook">
            <a href="https://www.facebook.com/studiobarberio.org/">
              <FaFacebookF />
            </a>
          </li>
          <li className="social-link social-link__linkedin">
            <a href="https://it.linkedin.com/in/avv-laura-barberio-99156368">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h4>Studio Legale Barberio</h4>
        <p>Via del Casale Strozzi, 31 00195 Roma</p>
        <p>Tel. 06.483694</p>
        <p>Fax. 06.48977102</p>
      </div>
      <div className="sidebar-widget">
        <h4>Email</h4>
        <p>info@studiobarberio.org</p>
      </div>
    </StyledAside>
  );
};

export default Aside;

const StyledAside = styled.aside`
  .sidebar-widget {
    &:not(:nth-child(1)) {
      margin-top: 1rem;
    }
    margin-bottom: 3rem;

    h4 {
      margin-bottom: 1rem;
    }

    p {
      margin-top: 0;
      text-align: justify;
      font-size: 1.5rem;
    }
  }

  .social-container {
    display: flex;

    .social-link {
      margin-right: 1rem;
      svg {
        fill: ${props => props.theme.white};

        width: 4rem;
        height: 4rem;
        padding: 1rem;
      }
    }
    .social-link__facebook {
      svg {
        background: #3a579a;
      }
    }
    .social-link__linkedin {
      svg {
        background: #127bb6;
      }
    }
  }
`;
