import React, { useState } from 'react';
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
    const [clicked, setClicked] = useState('home');

    const toogleMenu = (value: string) => {
        setClicked(value);
    };

    return (
        <Container>
            <MenuContainer>
                <MenuLink href="#" onClick={() => toogleMenu('home')}>
                    {clicked == 'home' ? <MdPerson /> : <MdOutlinePersonOutline />}
                    Sobre
                </MenuLink>

                <MenuLink href="#" onClick={() => toogleMenu('projects')}>
                    {clicked == 'projects' ? <MdCodeOff /> : <MdCode />}
                    Projetos
                </MenuLink>

                <MenuLink href="#" onClick={() => toogleMenu('palestras')}>
                    {clicked == 'palestras' ? <MdSchool /> : <MdOutlineSchool />}
                    Palestras
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}
