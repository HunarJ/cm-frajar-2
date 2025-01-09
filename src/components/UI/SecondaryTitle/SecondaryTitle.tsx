import React from 'react';
import { Heading } from './styles';
import { useFadeAnmation } from 'hooks/useFadeAnimation';

interface ISecondaryTitleProps {
    children: React.ReactNode,
    color: string,
}

const SecondaryTitle = ({children, color}: ISecondaryTitleProps) => {
  const { isVisible, ref } = useFadeAnmation();
  return (
    <Heading ref={ref} id="slide-up-title" className={isVisible ? 'visible' : ''} color={color}>{children}</Heading>
  )
}

export default SecondaryTitle
