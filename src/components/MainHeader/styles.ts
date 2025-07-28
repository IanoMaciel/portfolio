import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const Image = styled.img``;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
export const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  
  &:hover{
    color:  ${(props) => props.theme.colors.secondary};
  }
`;


export const ButtonChangeLanguage = styled.button``