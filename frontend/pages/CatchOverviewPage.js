import CatchOverview from "@/components/catchList/CatchesOverview";
import Link from "next/link";
import styled from "styled-components";
import AddButton from "@/public/img/add.svg";
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";

export default function CatchOverviewPage({handleDeleteCatch}) {
    const [data, setData] = useState([]);

    function fetchCatch() {
        axios.get("/api/catch")
            .then(response => {
                setData(response.data);
                console.log("data: ", response.data);
            })
            .catch(error => console.log("Error fetching data: ", error.message));
    }

    useEffect(() => {
        fetchCatch();
    }, []);

    return (
        <ContainerCatchView>
            <h2>Meine Fangliste</h2>
            <CatchOverview
                data={data}
                handleDeleteCatch={handleDeleteCatch}
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