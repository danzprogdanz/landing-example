import styled from "styled-components"
import { colors } from "../../assets/style/color"

export const PageLayoutStyled = styled.div`
  background-color: ${colors.primary.dark};
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;

  /* Responsive breakpoints */
  @media (min-width: 480px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  /* Content spacing */
  & > *:not(script) {
    width: 100%;
    box-sizing: border-box;
  }

  /* Prevent margin collapse */
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`