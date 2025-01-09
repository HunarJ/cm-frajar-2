import styled, { keyframes } from "styled-components";
import { variables } from "theme/variables";

export const ListDiv = styled.div`
  display: flex;
  justify-content: start;
  ul {
    @media (min-width: ${variables.mobileScreen}px) {
      padding-left: 0;
    }
    li {
      font-size: 18px;
      line-height: 25px;
      margin: 10px 0;
    }
  }

  @media (min-width: ${variables.mobileScreen}px) {
    margin: 25px 0;
  }
`;
