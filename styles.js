import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color:#202028;
  --main-color:#1161ff;
  --box-color:rgba(64,64,72,0.85);
  --light-color: rgba(128,128,136,0.6);
  // box shadows
  --box-shadow: #000;
  --box-shadow-default: 1px 5px 10px #000;
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
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 4rem 0 0 0;
        }
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: 160%;
  background-position: center;
  z-index: -1;
  }






`;
