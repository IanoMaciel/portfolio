import { useState, useEffect } from 'react';
import { Container, MenuContainer, MenuLink, ButtonTheme } from './styles';
import { useTheme } from '../../hooks/themes';
import {
    MdPerson,
    MdOutlinePersonOutline,
    MdCodeOff,
    MdCode,
    MdNightlightRound,
    MdSunny,
} from 'react-icons/md';

import { PiStackLight, PiStackFill } from 'react-icons/pi';

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

    // theme
    const { toggleTheme, theme } = useTheme();
    const [icon, setIcon] = useState(() => (theme.title === 'dark' ? true : false));
    function handleChangeTheme() {
        setIcon(!icon);
        toggleTheme();
    }

    return (
        <Container>
            <MenuContainer>
                <div>
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
                        href="/Stack"
                        onClick={() => toggleMenu('Stack')}
                        style={clicked === 'Stack' ? { opacity: 1 } : { opacity: 0.7 }}
                    >
                        {clicked === 'Stack' ? <PiStackFill /> : <PiStackLight />}
                        Stack
                    </MenuLink>
                </div>
                <ButtonTheme onClick={handleChangeTheme}>
                    {icon === true ? <MdSunny /> : <MdNightlightRound />}
                    <span>{icon === true ? 'Light' : 'Night'}</span>
                </ButtonTheme>
            </MenuContainer>
        </Container>
    );
}
