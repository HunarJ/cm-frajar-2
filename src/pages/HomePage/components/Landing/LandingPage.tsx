import React from 'react';

import { Container, LogoImg, ShadowClone } from './styles';
import logoKruh from '../../../../assets/HomePage/frajar-logo/logo_frajar_kruh.svg';
import MainTitle from '../../../../components/UI/MainTitle/MainTitle';
import { colors } from '../../../../theme';

const LandingPage = () => {
  return (
    <Container id='landing'>
        <LogoImg src={logoKruh} />
        <ShadowClone />
      {/* <ArrowImg src={Arrow} /> */}
    </Container>
  )
}

export default LandingPage
