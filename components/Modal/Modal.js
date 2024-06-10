import styled from "styled-components";
import Login from "../Login";

export default function Modal({ setLogin }) {
  return (
    <>
      <Overlay />
      <LoginBox>
        <Login setLogin={setLogin} />
      </LoginBox>
    </>
  );
}

const LoginBox = styled.div`
  background: var(--light-color);
  padding: 50px;
  border-radius: 15px;
  position: relative;
  margin-top: 200px;
  box-shadow: var(--box-shadow-default);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
`;
