import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1:#e3f6f5;
  --main-color1:#70a19f;
  --main-color2:#a67c53;
  --main-color3: #abd1c6;
  // box shadows
  --box-shadow: #303030;
  --box-shadow-default: 2px 2px 2px #303030;
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

`;