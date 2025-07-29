import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;
  padding: 10px 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 40px;
`;
export const LinkCurriculum = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 5px 10px;
    gap: 10px;
    border-radius: 4px;
    cursor: pointer;

    transition: color 0.3s;
    &:hover{
      opacity: .7;
    }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  text-align: justify;
`;