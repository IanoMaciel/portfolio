import { useEffect, useState } from "react";
import * as S from './styles';
import { ListIcon, XIcon } from "@phosphor-icons/react";
import logo from '../../assets/logo.svg';

export function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'aboutme', 'projects', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Logo src={logo} />

      <S.Nav isOpen={menuOpen}>
        <S.Link
          href="#home"
          onClick={() => setActiveSection('home')}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Início
        </S.Link>

        <S.Link
          href="#aboutme"
          onClick={() => setActiveSection('aboutme')}
          className={activeSection === 'aboutme' ? 'active' : ''}
        >
          Sobre mim
        </S.Link>

        <S.Link
          href="#projects"
          onClick={() => setActiveSection('projects')}
          className={activeSection === 'projects' ? 'active' : ''}
        >
          Projetos
        </S.Link>

        <S.Link
          href="#contact"
          onClick={() => setActiveSection('contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contato
        </S.Link>
      </S.Nav>

      <S.Action>
        <S.SelectLanguage>
          <option value="pt-br">🇧🇷 PT</option>
          <option value="en">🇺🇸 EN</option>
        </S.SelectLanguage>

        <S.HamburgerButton onClick={toggleMenu}>
          {menuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
        </S.HamburgerButton>
      </S.Action>
    </S.Container>
  );
}
