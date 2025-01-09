import React from "react";
import { Container, Paragraph } from "./styles";
import { useFadeAnmation } from "hooks/useFadeAnimation";

interface IParagraphDivProps {
  children: React.ReactNode;
  color: string;
  margintop: number;
  marginbottom: number;
}

const ParagraphDiv = ({
  children,
  color,
  margintop,
  marginbottom,
}: IParagraphDivProps) => {
  const { isVisible, ref } = useFadeAnmation();

  return (
    <Container
      ref={ref}
      margintop={margintop}
      marginbottom={marginbottom}
      id="paragraph-div"
      className={isVisible ? "visible" : ""}
    >
      <Paragraph color={color}>{children}</Paragraph>
    </Container>
  );
};

export default ParagraphDiv;
