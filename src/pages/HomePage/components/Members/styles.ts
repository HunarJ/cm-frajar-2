import styled, {keyframes} from "styled-components";
import { variables } from "theme/variables";

  const popUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(${variables.fadeUpOffset}px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
  width: 100%;
  opacity: 0;
  visibility: hidden;

  &.visible {
    animation: ${popUpAnimation} ${variables.popUpDuration}s ease-out forwards;
    visibility: visible;
  }

  @media (min-width: ${variables.mobileScreen}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${variables.mobileScreen}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;