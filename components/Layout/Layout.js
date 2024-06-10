import Link from "next/link";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <>
      <Header>
        <LinkTitle href={"/"}>
          <Title>Angel Kumpels 🎣</Title>
        </LinkTitle>
      </Header>
      {children}
      <Footer>
        {session && (
          <BoxLogout>
            Angemeldet als {session.user.name}
            <br />
            <button onClick={() => signOut()}>Abmelden</button>
          </BoxLogout>
        )}
      </Footer>
    </>
  );
}

const Header = styled.header`
  width: 100vw;
  background-color: var(--main-color);
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Title = styled.h1`
  margin: 0;
`;

const LinkTitle = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Footer = styled.footer`
  width: 100vw;
  background-color: var(--main-color);
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const BoxLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
