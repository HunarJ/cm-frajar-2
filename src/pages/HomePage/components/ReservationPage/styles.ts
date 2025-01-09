import styled, {keyframes} from "styled-components";
import { colors } from "../../../../theme";
import { variables } from "theme/variables";

import reservationBg from "../../../../assets/HomePage/ReservationPageI56.jpg";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(${variables.fadeUpOffset}px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Layout = styled.div`
  width: 100%;
  height: 778px;
  background-image: url(${reservationBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    animation: ${fadeInUp} ${variables.popUpDuration}s ease forwards;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${variables.mobileScreen}px) {
    flex-direction: row;
    gap: 140px;
  }
`;

export const NavLink = styled.a`
  color: ${colors.primary};
  font-size: 25px; 
  text-decoration: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    border-bottom: 2px solid ${colors.primary};
    transform: scale(1.2)
  }
`;