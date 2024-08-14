import Router, {useRouter} from "next/router";
import styled from "styled-components";
import {useSession} from "next-auth/react";
import CatchCard from "@/components/catchList/CatchCard";
import useSWR from "swr";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home({handleDeleteCatch}) {
    const {data: session} = useSession();
    const router = useRouter()
    const [catchDataHome, setCatchDataHome] = useState([])

    const fetchDataHome = () => {
        axios.get('/api/catch')
            .then((response) => {
                setCatchDataHome(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchDataHome()
    }, [])

    /*if (!session) {
        return <p>Bitte anmelden</p>*/
    /*} else {*/


    const lastCatch = catchDataHome[catchDataHome.length - 1];
    if (!lastCatch) {
        return null
    }

    return (
        <ContainerMain>
            {/* <H2>Willkommen {session.user.name}</H2>*/}
            <ContentBox>
                <ButtonNewCatch onClick={() => Router.push("/add")}>
                    neuen Fang eintragen
                </ButtonNewCatch>
            </ContentBox>
            <LastCatch>
                <H3LastCatch>Dein letzter Fang</H3LastCatch>
                <CatchCard data={lastCatch} onclickDeleteCatch={handleDeleteCatch}/>
            </LastCatch>
        </ContainerMain>
    )
    /*}*/

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
const H2 = styled.h2`
    font-size: 1.4rem;
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