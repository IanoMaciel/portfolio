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
        return currentURL || '/';
    });

    const toggleMenu = (value: string) => {
        setClicked(value);
    };

    useEffect(() => {
        console.log(clicked);
    }, [clicked]);

    console.log(clicked);

    return (
        <Container>
            <MenuContainer>
                <MenuLink
                    href="/"
                    onClick={() => toggleMenu('/')}
                    style={clicked === '/' ? { opacity: 1 } : { opacity: 0.7 }}
                >
                    {clicked === '/' ? <MdPerson /> : <MdOutlinePersonOutline />}
                    Sobre
                </MenuLink>

                <MenuLink
                    href="/Projects"
                    onClick={() => toggleMenu('Projects')}
                    style={clicked === 'Projects' ? { opacity: 1 } : { opacity: 0.7 }}
                >
                    {clicked === 'Projects' ? <MdCodeOff /> : <MdCode />}
                    Projetos
                </MenuLink>

                <MenuLink
                    href="/Lectures"
                    onClick={() => toggleMenu('Lectures')}
                    style={clicked === 'Lectures' ? { opacity: 1 } : { opacity: 0.7 }}
                >
                    {clicked === 'Lectures' ? <MdSchool /> : <MdOutlineSchool />}
                    Palestras
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}
