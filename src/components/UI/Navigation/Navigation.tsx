import React, { useState, useEffect } from "react";
import {
  Logo,
  MenuButton,
  Nav,
  Overlay,
  MenuItem,
  CloseButton,
  ExtendedLogo,
  ContactContainer,
  ContactItemDiv,
  ContactItem,
  StyledHashLink,
  NavTextLogo
} from "./styles";
import frajarTextLogo from '../../../assets/HomePage/frajar-logo/logo_frajar_text.svg';
import frajarTextLogoWhite from '../../../assets/HomePage/frajar-logo/logo_frajar_text-white.svg';

interface INavigationProps {
  defaultcolor: string;
}

const Navigation = ({ defaultcolor }: INavigationProps) => {
  const [extendedNav, setExtendedNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [scrolledDown, setScrolledDown] = useState(false);

  const toggleMenu = () => {
    setExtendedNav(!extendedNav);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolledDown(currentScrollY > 0);
    if (currentScrollY < lastScrollY) {
      setShowNav(true);
    } else if (currentScrollY > lastScrollY) {
      setShowNav(false);
      setExtendedNav(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Nav shownav={showNav} scrolleddown={scrolledDown}>
        <Logo href="/" scrolleddown={scrolledDown} defaultcolor={defaultcolor}>
          <NavTextLogo src={frajarTextLogoWhite} />
        </Logo>
        <MenuButton
          scrolleddown={scrolledDown}
          onClick={toggleMenu}
          defaultcolor={defaultcolor}
        >
          Menu
        </MenuButton>
      </Nav>
      <Overlay isvisible={extendedNav}>
        <CloseButton onClick={toggleMenu}>X</CloseButton>
        <ExtendedLogo href="/"><NavTextLogo src={frajarTextLogoWhite} /></ExtendedLogo>
        <MenuItem href="/">CM FRAJÁR</MenuItem>
        <MenuItem href="#reservation">POPTEJTE SI NÁS</MenuItem>
        <ContactContainer>
          <ContactItemDiv>
            <ContactItem href='mailto:cmfrajar@gmail.com'>cmfrajar@gmail.com</ContactItem>
            <ContactItem href='tel:+420776668900'>+420 776 668 900</ContactItem>
          </ContactItemDiv>
          <ContactItemDiv>
            <ContactItem href='https://www.instagram.com/cmfrajar/'>Instagram</ContactItem>
          </ContactItemDiv>
        </ContactContainer>
      </Overlay>
    </>
  );
};

export default Navigation;
