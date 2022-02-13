import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    max-width: 100%;
    box-sizing: border-box;
  }

html{
  font-size:62.5%;
}
body{
  font-size:1.6rem;
  background-color:#FBFFFB;
  line-height:1.5;
  color:#4f4f4f;
  font-family: 'Source Sans Pro', sans-serif;
}
a{
  font-family: 'Source Sans Pro', sans-serif;
  color:#266035;
  text-decoration: none;
}

`