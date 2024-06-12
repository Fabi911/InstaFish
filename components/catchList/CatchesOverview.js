import CatchCard from "./CatchCard";
import styled from "styled-components";

export default function CatchOverview({ data, handleDeleteCatch, mutate }) {
  {
    console.log(data);
  }
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
          onclickDeleteCatch={handleDeleteCatch}
          id={catchItem._id}
          mutate={mutate}
          bait={catchItem.bait}
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
  margin-bottom: 4rem;
`;
