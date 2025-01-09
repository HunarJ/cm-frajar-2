import React from "react";
import { useFadeAnmation } from "hooks/useFadeAnimation";
import { Container } from "./styles";
import MemberBox from "components/MemberBox/MemberBox";

import memberImg from '../../../../assets/HomePage/user.png'

export const Members = () => {
  const { isVisible, ref } = useFadeAnmation();

  return (
    <Container
      ref={ref}
      id="paragraph-div"
      className={isVisible ? "visible" : ""}
    >
        <MemberBox image={memberImg} name='Jan Huňař' role='Primáš' desc="Vůdce našeho ansáblu" />
        <MemberBox image={memberImg} name='Matěj Prát' role='Terc' desc="Vůdce našeho ansáblu" />
        <MemberBox image={memberImg} name='René Zhříval' role='Cimbál' desc="Vůdce našeho ansáblu" />
        <MemberBox image={memberImg} name='Marek Salay' role='Klarinet' desc="Vůdce našeho ansáblu" />
        <MemberBox image={memberImg} name='Michal Bařina' role='Kontr' desc="Vůdce našeho ansáblu" />
        <MemberBox image={memberImg} name='Ondřej Petrjánoš' role='Kontrabas' desc="Vůdce našeho ansáblu" />
    </Container>
  );
};
