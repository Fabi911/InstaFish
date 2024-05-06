import styled from "styled-components";
import Image from "next/image";

export default function CatchCard({ image, date, location, species }) {
  return (
    <CardContainer>
      <Image src={image} alt="catch Image" height={400} width={400} />
      <CardInfo>
        <p>{species}</p>
        <p>{date}</p>
        <p>{location}</p>
      </CardInfo>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  width: 100vw;
  border: 1px solid black;
  gap: 10px;
`;

const CardInfo = styled.div``;
