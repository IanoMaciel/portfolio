import styled from "styled-components";

interface NavProps {
  isOpen?: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background: ${(props) => props.theme.colors.primary};
  position: relative; // importante para o menu absolute funcionar
  z-index: 20;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #333333;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    padding: ${(props) => (props.isOpen ? "20px" : "0 20px")};
    overflow: hidden;

    max-height: ${(props) => (props.isOpen ? "500px" : "0")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-10px)")};
    transition: all 0.3s ease-in-out;

    display: ${(props) => (props.isOpen ? "flex" : "none")}; // <-- esconde o menu fechado
    z-index: 15;
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &.active {
    color: ${(props) => props.theme.colors.secondary}; // cor de destaque
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SelectLanguage = styled.select`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 5px 10px;
  cursor: pointer;
  /* border: 1px solid ${(props) => props.theme.colors.white}; */
  border-radius: 4px;

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
