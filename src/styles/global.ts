import { createGlobalStyle } from 'styled-components'

import GrandisRegularItalic from '../asset/Grandis Regular Italic.otf'
import GrandisBlack from '../asset/Grandis Black.otf'
import GrandisRegular from '../asset/Grandis Regular.otf'
import PoppinsBold from '../asset/Poppins-Bold.ttf'
import PoppinsRegular from '../asset/Poppins-Regular.ttf'

const GlobalStyles = createGlobalStyle`
    .App {
  @font-face {
  font-family: 'Grandis-RegularItalic';
  src: local('Font Name'), local('Grandis-RegularItalic'),
  url(${GrandisRegularItalic}) format('woff');
}
@font-face {
  font-family: 'Grandis-Black';
  src: local('Font Name'), local('Grandis-Black'),
  url(${GrandisBlack}) format('woff');
}
@font-face {
  font-family: 'Grandis-Regular';
  src: local('Font Name'), local('Grandis-Regular'),
  url(${GrandisRegular}) format('woff');
}
@font-face {
  font-family: 'Poppins-Bold';
  src: local('Font Name'), local('Poppins-Bold'),
  url(${PoppinsBold}) format('woff');
}
@font-face {
  font-family: 'Poppins-Regular';
  src: local('Font Name'), local('Poppins-Regular'),
  url(${PoppinsRegular}) format('woff');
}
background-color: #000235;

}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
  display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #000235;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
  width: 1366px;
    background-color: #000235;
}

button {
    cursor: pointer;
}
`

export { GlobalStyles }
