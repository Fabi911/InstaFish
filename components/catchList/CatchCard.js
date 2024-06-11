import styled from "styled-components";
import { CldImage } from "next-cloudinary";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function CatchCard({
  image,
  date,
  location,
  species,
  size,
  weight,
  methode,
}) {
  const [imageModal, setImageModal] = useState(false);

  function onclickImageModal() {
    setImageModal(true);
  }
  return (
    <CardContainer>
      <PopUpButton type="button" onClick={() => onclickImageModal()}>
        <CldImage
          width="800"
          height="800"
          style={{
            width: "100%",
            height: "auto",
          }}
          src={image}
          alt={species}
        />
      </PopUpButton>
      <CardInfo>
        <p>Fischart: {species}</p>
        <p> Fangdatum: {date}</p>
        <p>Ort: {location}</p>
        <p>Länge: {size} cm</p>
        <p>Gewicht: {weight} kg</p>
        <p>Angelart: {methode}</p>
      </CardInfo>
      {imageModal && (
        <Modal image={image} species={species} setImageModal={setImageModal} />
      )}
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  width: 80vw;
  gap: 10px;
  padding: 5px 10px;
  background-color: var(--box-color);
  box-shadow: var(--box-shadow-default);
  border-radius: 3px;
`;

const CardInfo = styled.div`
  width: 60%;
  font-size: 0.8rem;
`;

const PopUpButton = styled.button`
  background: none;
  position: relative;
  width: 35%;
  border: none;
  padding: 0;
`;
