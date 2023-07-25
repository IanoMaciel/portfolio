import { useState, useEffect } from 'react';
import { Container, MenuContainer, MenuLink } from './styles';
import {
    MdPerson,
    MdOutlinePersonOutline,
    MdCodeOff,
    MdCode,
    MdSchool,
    MdOutlineSchool,
} from 'react-icons/md';

export function Aside() {
    const [clicked, setClicked] = useState(() => {
        const currentURL = window.location.pathname.slice(1);
        return currentURL || 'About';
    });

    const toggleMenu = (value: string) => {
        setClicked(value);
    };

    useEffect(() => {
        console.log(clicked);
    }, [clicked]);

    return (
        <Container>
            <MenuContainer>
                <MenuLink href="/About" onClick={() => toggleMenu('About')}>
                    {clicked === 'About' ? <MdPerson /> : <MdOutlinePersonOutline />}
                    Sobre
                </MenuLink>

                <MenuLink href="/Projects" onClick={() => toggleMenu('Projects')}>
                    {clicked === 'Projects' ? <MdCodeOff /> : <MdCode />}
                    Projetos
                </MenuLink>

                <MenuLink href="/Lectures" onClick={() => toggleMenu('Lectures')}>
                    {clicked === 'Lectures' ? <MdSchool /> : <MdOutlineSchool />}
                    Palestras
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}
