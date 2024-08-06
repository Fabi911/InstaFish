import Router, {useRouter} from "next/router";
import styled from "styled-components";
import {useSession} from "next-auth/react";
import CatchCard from "@/components/catchList/CatchCard";
import useSWR from "swr";

export default function Home({handleDeleteCatch}) {
    const {data: session} = useSession();
    const router = useRouter()
    const {data, isLoading, error, mutate} = useSWR(
        "/api/catches",
        {
            fallbackData: [],
        },
        {refreshInterval: 400}
    );
    if (!session) {
        return <p>Bitte anmelden</p>
    } else {

        if (error) return <div>failed to load</div>;
        if (isLoading) return <div>loading...</div>;
        const lastCatch = data[data.length - 1];
        if (!lastCatch) {
            return null
        }

        return (
            <ContainerMain>
                <h2>Willkommen {session.user.name}</h2>
                <ContentBox>
                    <ButtonNewCatch onClick={() => Router.push("/add")}>
                        neuen Fang eintragen
                    </ButtonNewCatch>
                </ContentBox>
                <LastCatch>
                    <H3LastCatch>Dein letzter Fang</H3LastCatch>
                    <CatchCard data={lastCatch} onclickDeleteCatch={handleDeleteCatch} mutate={mutate}/>
                </LastCatch>
            </ContainerMain>
        )
    }

}

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0.5rem 0 1rem 0;
`

const LastCatch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-bottom: 3rem;
`

const H3LastCatch = styled.h3`
    margin-bottom: 0.2rem;
`

const ButtonNewCatch = styled.button`
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
            background-color: var(--button-color);
            border: none;
            border-radius: 5px;
            box-shadow: var(--box-shadow-default);

            &:active {
                box-shadow: inset var(--box-shadow-default);
            }
    `
;