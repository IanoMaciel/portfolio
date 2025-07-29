import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const Information = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;


export const Title = styled.h3`
   color: ${(props) => props.theme.colors.secondary};
`;

export const Subtitle = styled.h1`
    font-weight: 500;
    font-size: 40px;
    color: ${(props) => props.theme.colors.white};
`;

export const Social = styled.div`
    display: flex;
    gap: 10px;
`;

export const LinkSocial = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    background: #333333;
    padding: 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Action = styled.div`
    display: flex;
    gap: 20px;
`;

export const LinkContact = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;

    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    background: ${(props) => props.theme.colors.secondary};
    padding: 10px;
`;


export const LinkProject = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;

    text-decoration: none;
    font-weight: 600;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 10px;
`;

export const Profile = styled.div`
    width: 50%;
    background-color: burlywood
`;