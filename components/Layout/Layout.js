import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <LinkTitle href={"/"}>
          <Title>Angel Kumpels 🎣</Title>
        </LinkTitle>
      </Header>
      {children}
      <Footer>
        <p>&copy; webschmiede döz</p>
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
  height: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
