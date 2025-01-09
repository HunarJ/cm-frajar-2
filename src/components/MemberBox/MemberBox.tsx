import React from 'react'
import { DescText, MemberContainer, MemberImg, MemberLeftBox, MemberRightBox, NameTitle, RoleText } from './styles'

interface MemberBoxProps {
    image: string,
    name: string,
    role: string,
    desc: string
}

const MemberBox = ({image, name, role, desc}: MemberBoxProps) => {
  return (
    <MemberContainer>
        <MemberLeftBox>
            <MemberImg src={image} />
        </MemberLeftBox>
        <MemberRightBox>
            <NameTitle>{name}</NameTitle>
            <RoleText>{role}</RoleText>
            <DescText>{desc}</DescText>
        </MemberRightBox>
    </MemberContainer>
  )
}

export default MemberBox