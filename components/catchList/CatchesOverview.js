import CatchCard from "./CatchCard";
import styled from "styled-components";

export default function CatchOverview({ data }) {
  return (
    <Container>
      {data.map((catchItem) => (
        <CatchCard
          key={catchItem._id}
          image={catchItem.image}
          date={catchItem.date}
          species={catchItem.species}
          location={catchItem.location}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 3.5rem;
`;
