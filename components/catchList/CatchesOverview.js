import CatchCard from "./CatchCard";
import styled from "styled-components";

export default function CatchOverview({ data }) {
  console.log(data);
  return (
    <Container>
      {data.map((catchItem) => (
        <CatchCard
          key={catchItem._id}
          image={catchItem.image}
          date={catchItem.date}
          species={catchItem.species}
          location={catchItem.location}
          size={catchItem.size}
          weight={catchItem.weight}
          methode={catchItem.methode}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 10px;
`;
