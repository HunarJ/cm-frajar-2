import * as styled from 'styled-components';
import { colors } from '../src/theme/colors';

const GlobalStyles = styled.createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */

    &::after,
    &::before {
      box-sizing: border-box;
    }

    input {
      -webkit-user-select: text;
    }
  }

  body {
    margin: 0;
    background-color: ${colors.primary};
    font-family: 'Hind';
    font-weight: 400;
    font-size: 16px;
  }
`;

export default GlobalStyles;
