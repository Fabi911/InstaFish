import styled from "styled-components";
import Image from "next/image";

export default function CatchCard({ image, date, location, species }) {
  return (
    <CardContainer>
      <Image
        src={image}
        alt="catch Image"
        height={800}
        width={800}
        style={{
          width: "40%",
          height: "auto",
        }}
      />
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
