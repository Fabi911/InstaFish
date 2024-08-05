import Link from "next/link";
import styled from "styled-components";
import {useSession, signOut, signIn} from "next-auth/react";
import {useRouter} from "next/router";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

export default function Layout({children}) {
    const {data: session} = useSession();
    const router = useRouter();
    return (
        <>
            <Header>
                <BurgerMenu/>
                <LinkTitle href={"/"}>
                    <Title>Angel Kumpels 🎣</Title>
                </LinkTitle>
            </Header>
            {children}
            <Footer>
                {!session && (
                    <BoxLogout>
                        Du bist nicht angemeldet. <br/>
                        <button onClick={() => signIn()}>Anmelden</button>
                    </BoxLogout>
                )}
                {session && (
                    <BoxLogout>
                        Angemeldet als {session.user.name}
                        <br/>
                        <button onClick={() => signOut()}>Abmelden</button>
                    </BoxLogout>
                )}
                <BackButton onClick={() => router.push("/")}>Zurück</BackButton>
            </Footer>
        </>
    );
}

const Header = styled.header`
    width: 100vw;
    background-color: var(--bg-color);
    height: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: var(--box-shadow-default);
`;
const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const LinkTitle = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Footer = styled.footer`
    width: 100vw;
    background-color: var(--bg-color);
    height: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    box-shadow: -2px -2px 10px #000;
`;

const BoxLogout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

const BackButton = styled.button`
    position: absolute;
    left: 10px;
    bottom: 20px;
`;