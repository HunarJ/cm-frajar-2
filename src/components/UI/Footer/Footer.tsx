import React from 'react'
import { Layout, LogoDiv, TextDiv, FooterLink } from './styles'

const Footer = () => {
  return (
    <Layout>
        <LogoDiv><FooterLink href='#landing'>NA MORAVKU</FooterLink></LogoDiv>
        <TextDiv><FooterLink href="https://www.google.com/maps/place/Mal%C3%A1+Mor%C3%A1vka+106,+793+36+Mal%C3%A1+Mor%C3%A1vka/@50.0321431,17.3069373,17z/data=!3m1!4b1!4m6!3m5!1s0x471220b25562e965:0x9af8b293a2b47373!8m2!3d50.0321432!4d17.3118082!16s%2Fg%2F11c1fx9j88?entry=ttu" target="_blank" rel="noopener noreferrer">Malá Morávka 106,<br />793 36 Malá Morávka</FooterLink></TextDiv>
        <TextDiv><FooterLink href='mailto:info@namoravku.cz'>info@namoravku.cz</FooterLink><br /><FooterLink href='tel:+420776583856'>+420 776 583 856</FooterLink></TextDiv>
        <TextDiv><FooterLink>Facebook</FooterLink><br /><FooterLink href='https://www.instagram.com/namoravku?igsh=aTc0anNiejFzMHpi&utm_source=qr'>Instagram</FooterLink></TextDiv>
    </Layout>
  )
}

export default Footer
