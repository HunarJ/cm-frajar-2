import styled from "styled-components";
import LandingPageImage from "../../../../assets/HomePage/landing-bg.jpeg";
import { colors } from "theme";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${LandingPageImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 20rem;
  z-index: 2;
`;

export const ShadowClone = styled.div`
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`;
