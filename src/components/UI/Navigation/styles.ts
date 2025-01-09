import styled from "styled-components";
import { colors } from "../../../theme";
import { variables } from "theme/variables";

import { HashLink as BaseHashLink } from "react-router-hash-link";

interface IOverlayProps {
  isvisible?: boolean;
}

interface INavProps {
  shownav: boolean;
  scrolleddown: boolean;
}

interface IScrollProps {
  scrolleddown: boolean;
  defaultcolor: string;
}

export const Nav = styled.nav<INavProps>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: ${({ scrolleddown }) =>
    scrolleddown ? "rgba(247, 246, 241, 0.7)" : "transparent"};
  position: fixed;
  top: ${({ shownav }) => (shownav ? "0" : "-100%")};
  transition: top 0.3s, background-color 0.3s, opacity 0.3s;
  z-index: 20;
  box-shadow: ${({ scrolleddown }) =>
    scrolleddown ? "0 0px 1px rgba(0, 0, 0, 0.2)" : "none"};
  backdrop-filter: ${({ scrolleddown }) =>
    scrolleddown ? "blur(10px)" : "none"};
  -webkit-backdrop-filter: ${({ scrolleddown }) =>
    scrolleddown ? "blur(10px)" : "none"};
  transition: top 0.3s, background-color 0.3s, opacity 0.3s,
    backdrop-filter 0.3s;
`;

export const Logo = styled.a<IScrollProps>`
  font-family: "FH Alpha Test", sans-serif;
  font-size: 25px;
  color: ${({ scrolleddown, defaultcolor }) =>
    scrolleddown ? colors.textPrimary : defaultcolor};
  margin-left: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MenuButton = styled.a<IScrollProps>`
  font-family: "FH Alpha Test", sans-serif;
  font-size: 25px;
  line-height: 35px;
  color: ${({ scrolleddown, defaultcolor }) =>
    scrolleddown ? colors.textPrimary : defaultcolor};
  margin-right: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Overlay = styled.div<IOverlayProps>`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  visibility: ${(props) => (props.isvisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 10;
`;

export const MenuItem = styled.a`
  font-size: 50px;
  font-family: "FH Alpha Test", sans-serif;
  text-decoration: none;
  text-align: center;
  color: ${colors.primary};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${variables.mobileScreen}px) {
    font-size: 90px;
  }
`;

export const StyledHashLink = styled(BaseHashLink)`
  font-size: 50px;
  font-family: "FH Alpha Test", sans-serif;
  text-decoration: none;
  text-align: center;
  color: ${colors.primary};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${variables.mobileScreen}px) {
    font-size: 90px;
  }
`;

export const CloseButton = styled.div`
  font-family: "FH Alpha Test", sans-serif;
  position: absolute;
  top: 16px;
  right: 25px;
  font-size: 70px;
  line-height: 70px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

export const ExtendedLogo = styled.a`
  font-family: "FH Alpha Test", sans-serif;
  font-size: 25px;
  color: ${colors.primary};
  position: absolute;
  top: 16px;
  left: 25px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContactContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContactItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 25px;
`;

export const ContactItem = styled.a`
  font-size: 12px;
  color: ${colors.primary};
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 0.5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${variables.mobileScreen}px) {
    font-size: 20px;
  }
`;

export const NavTextLogo = styled.img`
  height: 3rem;
`
