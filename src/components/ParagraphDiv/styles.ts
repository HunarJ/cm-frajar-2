import styled, {keyframes} from "styled-components";
import { variables } from "theme/variables";

interface ParagraphProps {
  color: string;
}

interface ContainerProps {
  margintop: number;
  marginbottom: number;
}

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

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  opacity: 0;
  visibility: hidden;

  &.visible {
    animation: ${popUpAnimation} ${variables.popUpDuration}s ease-out forwards;
    visibility: visible;
  }

  @media (min-width: ${variables.mobileScreen}px) {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: ${(props) => props.margintop}px;
    margin-bottom: ${(props) => props.marginbottom}px;
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  text-align: center;
  max-width: 631px;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => props.color};

  @media (min-width: ${variables.mobileScreen}px) {
    font-size: 25px;
    line-height: 35px;
  }
`;
