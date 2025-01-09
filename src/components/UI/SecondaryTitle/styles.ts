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


export const Heading = styled.h2<HeadingProps>`
  font-family: "FH Alpha Test", sans-serif;
  font-size: 45px;
  line-height: 50px;
  padding: 0px 0px;
  margin: 0px 0px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-align: left;
  color: ${(props) => props.color};
  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    animation: ${fadeInUp} ${variables.popUpDuration}s ease-out forwards;
  }

  @media (min-width: 768px) {
    font-size: 90px;
    line-height: 100px;
}
`;
