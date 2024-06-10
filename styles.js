import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1:#202028;
  --main-color:#1161ff;
  --box-color:#404048;
  --light-color: #808088;
  // box shadows
  --box-shadow: #000;
  --box-shadow-default: 2px 10px 10px #000;
  // responsive design variables
--card-mobile:  80vw;
--card-tablet:  65vw;
--card-browser: 50vw; 
--distance-edge-mobile: 15px;
--distance-edge-tablet: 25px;
--distance-edge-desktop: 50Px; 
--icon-height-mobile:50px;
--icon-height-tablet:75px;
--icon-height-desktop:75px;
--icon-width-mobile:50px;
--icon-width-tablet:75px;
--icon-width-desktop:75px;
font-size: 20px;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body{
  margin: 3.5rem 0 3rem 0;
  background-color: var(--bg-color1);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}


`;
