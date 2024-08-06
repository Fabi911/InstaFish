import useSWR from "swr";
import CatchOverview from "@/components/catchList/CatchesOverview";
import Link from "next/link";
import styled from "styled-components";
import AddButton from "@/public/img/add.svg";
import Image from "next/image";

export default function CatchOverviewPage({handleDeleteCatch}) {
    const {data, isLoading, error, mutate} = useSWR(
        "/api/catches",
        {
            fallbackData: [],
        },
        {refreshInterval: 400}
    );
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <ContainerCatchView>
            <h2>Meine Fangliste</h2>
            <CatchOverview
                data={data}
                handleDeleteCatch={handleDeleteCatch}
                mutate={mutate}
            />
            <LinkAdd href={"/add"}><Image src={AddButton} alt="add-button" height={50} width={50}/></LinkAdd>
        </ContainerCatchView>
    );
}

const LinkAdd = styled(Link)`
    text-decoration: none;
    color: white;
    position: fixed;
    bottom: 3.3rem;
    right: 6px;
    background-color: var(--light-color);
    padding: 4px;
    border-radius: 2px;
    z-index: 1;
`
const ContainerCatchView = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
        `
;