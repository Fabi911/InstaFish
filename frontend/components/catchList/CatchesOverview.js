import CatchCard from "./CatchCard";
import styled from "styled-components";

export default function CatchOverview({data, handleDeleteCatch, mutate}) {
    return (
        <Container>
            {data.map((catchItem) => (
                <CatchCard
                    key={catchItem.id}
                    data={catchItem}
                    onclickDeleteCatch={handleDeleteCatch}
                    mutate={mutate}
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