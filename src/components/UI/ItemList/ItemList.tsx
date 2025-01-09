import React from "react";
import { ListDiv } from "./styles";

const ItemList = () => {
  return (
    <ListDiv>
      <ul>
        <li>
          Apartmán 1- v podkroví se sociálním zázemím; boxspring postel; možnost
          přistýlky; (2+1)
        </li>
        <li>
          Apartmán 2 - v podkroví se sociálním zázemím; boxspring postel;
          možnost přistýlky; (2+1)
        </li>
        <li>Ložnice 3 - v přízemí - dvoulůžková postel (2 osoby)</li>
        <li>Obývací pokoj s rozkládacím gaučem (2 osoby)</li>
        <li>Sociální zázemí - 3 x sprchový kout; 4 x WC</li>
        <li>Kuchyň</li>
        <li>Knihovna</li>
        <li>Stodola</li>
        <li>Maximálně pro 10 osob</li>
      </ul>
    </ListDiv>
  );
};

export default ItemList;
