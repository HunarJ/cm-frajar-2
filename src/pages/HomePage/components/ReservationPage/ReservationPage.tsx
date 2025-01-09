import React from 'react';
import { Layout, NavLink, NavigationLinks } from './styles';
import { colors } from '../../../../theme';
import { useFadeAnmation } from 'hooks/useFadeAnimation';


import MainTitle from '../../../../components/UI/MainTitle/MainTitle';
import ParagraphDiv from '../../../../components/ParagraphDiv/ParagraphDiv';

const reservationText = 'Užijte si kouzelnou dovolenou v srdci přírody, kde na vás čeká klid, čistý vzduch a spousta aktivit. Chalupa nabízí veškerý komfort a je ideálním místem pro rodiny i skupiny přátel.';

const ReservationPage = () => {
  const { isVisible, ref } = useFadeAnmation();

  return (
    <Layout ref={ref} className={isVisible ? 'visible' : ''} id='reservation'>
        <MainTitle color={colors.primary}>Rezervace</MainTitle>
        <ParagraphDiv color={colors.primary} margintop={51} marginbottom={74}>{reservationText}</ParagraphDiv>
        <NavigationLinks>
            <NavLink href='tel:+420776583856'>+420 776 583 856</NavLink>
            <NavLink href='mailto:info@namoravku.cz'>info@namoravku.cz</NavLink>
        </NavigationLinks>
    </Layout>
  )
}

export default ReservationPage
