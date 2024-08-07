import styled from "styled-components";
import {CldImage} from "next-cloudinary";
import Modal from "../Modal/Modal";
import {useState} from "react";


export default function CatchCard({
                                      data,
                                      onclickDeleteCatch,
                                      mutate,
                                  }) {
    const [imageModal, setImageModal] = useState(false);
    const {bait, date, image, location, methode, size, species, weight, _id} = data;
    const DefaultImage = "https://res.cloudinary.com/ddqqfiwvi/image/upload/v1723015539/fish-img/fish_hlfqlq.jpg";

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
                    src={image || DefaultImage}
                    alt={species}
                />
            </PopUpButton>
            <CardInfo>
                <p>Fischart: {species}</p>
                <p>Fangdatum: {date}</p>
                <p>Ort: {location}</p>
                <p>Länge: {size} cm</p>
                <p>Gewicht: {weight} kg</p>
                <p>Angelart: {methode}</p>
                <p>Köder/Monatge: {bait}</p>
            </CardInfo>
            {imageModal && (
                <Modal image={image} species={species} setImageModal={setImageModal}/>
            )}
            <DeleteButton
                type="button"
                onClick={() => onclickDeleteCatch(_id, mutate)}
            >
                🚫
            </DeleteButton>
        </CardContainer>
    );
}

const CardContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 90vw;
    gap: 7px;
    padding: 10px 5px;
    background-color: var(--box-color);
    box-shadow: var(--box-shadow-default);
    border-radius: 3px;
    position: relative;
`;

const CardInfo = styled.div`
    width: 60%;
    font-size: 0.8rem;
    background: var(--light-color);
    border-radius: 5px;
    padding: 0 8px;
    position: relative;
`;

const PopUpButton = styled.button`
    background: none;
    position: relative;
    width: 40%;
    border: none;
    padding: 0;
`;

const DeleteButton = styled.button`
    position: absolute;
    top: 4px;
    right: 2px;
    border: none;
    height: 1.7rem;
    width: 1.7rem;
    background: none;
`;