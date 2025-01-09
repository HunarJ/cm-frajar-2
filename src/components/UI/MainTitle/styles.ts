import styled, {keyframes} from "styled-components";
import { variables } from "theme/variables";


interface HeadingProps {
  color?: string;
}

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

export const Heading = styled.h1<HeadingProps>`
  font-family: "FH Alpha Test", sans-serif;
  font-size: 45px;
  line-height: 90px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.color};
  margin: 0px;
  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    animation: ${fadeInUp} ${variables.popUpDuration}s ease-out forwards;
  }

  @media (min-width: ${variables.mobileScreen}px) {
    font-size: 120px;
    line-height: 130px;
  }
`;
