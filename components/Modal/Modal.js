import styled from "styled-components";
import { CldImage } from "next-cloudinary";
export default function Modal({ image, species, setImageModal }) {
  return (
    <>
      <Overlay />
      <LoginBox>
        <CloseButton onClick={() => setImageModal(false)}>❌</CloseButton>
        <CldImage
          width="800"
          height="800"
          style={{
            width: "85%",
            height: "auto",
          }}
          src={image}
          alt={species}
        />
      </LoginBox>
    </>
  );
}

const LoginBox = styled.div`
  background: var(--light-color);
  padding: 20px;
  border-radius: 15px;
  position: fixed;
  top: 16%;
  left: 5%;
  box-shadow: var(--box-shadow-default);
  z-index: 1000;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CloseButton = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  background: none;
  border: none;
`;
