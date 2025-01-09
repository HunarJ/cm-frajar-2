import React from "react";
import { Arrow, MoreButtonContainer, Text } from "./styles";
import arrowImage from "../../../assets/UI/Arrow79.png";

interface IMoreButoonProps {
  linkTo: string;
}

const MoreButton = ({linkTo}: IMoreButoonProps) => {
  return (
    <MoreButtonContainer href={linkTo}>
      <Text>Více</Text>
      <Arrow src={arrowImage} />
    </MoreButtonContainer>
  );
};

export default MoreButton;
