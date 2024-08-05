import {useState} from "react";
import Link from "next/link";
import styled from "styled-components";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <MenuButton onClick={toggleMenu}>
                ☰
            </MenuButton>
            {isOpen && (
                <Menu>
                    <MenuItem>
                        <LinkMenu href="/" onClick={closeMenu}>Startseite</LinkMenu>
                    </MenuItem>
                    <MenuItem>
                        <LinkMenu href="/CatchOverviewPage" onClick={closeMenu}>Fänge</LinkMenu>
                    </MenuItem>
                    <MenuItem>
                        <LinkMenu href="/Calendar" onClick={closeMenu}>Kalender</LinkMenu>
                    </MenuItem>
                    <MenuItem>
                        <LinkMenu href="/Profile" onClick={closeMenu}>Profil</LinkMenu>
                    </MenuItem>
                </Menu>
            )}
        </>
    );
}

const MenuButton = styled.button`
    position: fixed;
    top: 0.2rem;
    right: 0.6rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    z-index: 2;
`;

const Menu = styled.div`
    position: fixed;
    font-size: 1rem;
    top: 0.4rem;
    right: 0.4rem;
    padding-top: 2.4rem;
    width: 200px;
    background-color: RGBA(30, 30, 30, 0.95);
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const MenuItem = styled.div`
    margin: 1rem 0;
    font-size: 1rem;
    color: white;
    text-decoration: none;


`
const LinkMenu = styled(Link)`
            text-decoration: none;
            color: white;
    `
;