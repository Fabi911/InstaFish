import Link from "next/link";
import styled from "styled-components";
import {useSession, signOut, signIn} from "next-auth/react";
import {useRouter} from "next/router";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import LoginImage from "@/public/img/Sign_in_squre.png";
import LogutImage from "@/public/img/Sign_out_squre.png";
import BackArrow from "@/public/img/Refund_back.png";
import Image from "next/image";

export default function Layout({children}) {
    const {data: session} = useSession();
    const router = useRouter();
    return (
        <>
            <Header>
                {!session && (
                    <BoxLogout>
                        <ButtonLogOutOrIn onClick={() => signIn()}><Image src={LoginImage} alt={"Login Button"}
                                                                          width={20}
                                                                          height={20}/></ButtonLogOutOrIn>
                    </BoxLogout>
                )}
                {session && (
                    <BoxLogout>
                        <ButtonLogOutOrIn onClick={() => signOut()}><Image src={LogutImage} alt={"Logout Button"}
                                                                           width={20}
                                                                           height={20}/></ButtonLogOutOrIn>
                    </BoxLogout>
                )}
                <LinkTitle href={"/"}>
                    <Title>Fishing Journal 🎣</Title>
                </LinkTitle>
                <BurgerMenu/>

            </Header>
            {children}
            <Footer>

                <BackButton onClick={() => router.push("/")}><Image src={BackArrow} alt={BackArrow} width={30}
                                                                    height={30}/></BackButton>
                <Link href={"/impressum"}>Impressum</Link>
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
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    box-shadow: var(--box-shadow-default);
    padding: 0 0.5rem;
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    box-shadow: -2px -2px 10px #000;
    padding: 0 0.5rem;
`;

const BoxLogout = styled.div`
    /* position: fixed;
     top: 0.8rem;
     left: 0.6rem;*/
`;

const ButtonLogOutOrIn = styled.button`
    box-shadow: var(--box-shadow-default);

    &:active {
        box-shadow: inset var(--box-shadow-default);
    }
`

const BackButton = styled.button`
    /*    position: absolute;
        left: 10px;
        bottom: 20px;*/
`;