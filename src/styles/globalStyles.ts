import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  
  html, body, #root {
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    font-family: "Montserrat", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;