import styled from "styled-components";
import { variables } from "theme/variables";
import { colors } from "../../../theme";

export const Layout = styled.div`
  height: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 25px 0px;

  @media (min-width: ${variables.mobileScreen}px) {
    flex-direction: row;
    align-items: center;
    margin: 0px;
  }
`;
export const TextDiv = styled.div`
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const LogoDiv = styled.div`
  font-family: "FH Alpha Test", sans-serif;
  font-size: 25px;
  line-height: 35px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: ${colors.textPrimary};

  &:hover {
    text-decoration: underline;
  }
`
