import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
        padding: 40px 20px;
    }
`;

export const Information = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 1024px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h3`
   color: ${(props) => props.theme.colors.secondary};
   font-size: 20px;

   @media (max-width: 768px) {
        font-size: 18px;
   }
`;

export const Subtitle = styled.h1`
    font-weight: 500;
    font-size: 40px;
    color: ${(props) => props.theme.colors.white};

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Social = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 1024px) {
        justify-content: center;
    }
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
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;

export const Action = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: center;
    }
`;

export const LinkContact = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    background: ${(props) => props.theme.colors.secondary};
    padding: 10px 20px;

    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`;

export const LinkProject = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 10px 20px;

    transition: opacity .3s;
    &:hover {
        opacity: .7;
        border: none;
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const ContentProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Profile = styled.img`
    width: 90%;
    height: auto;
    max-width: 400px;

    @media (max-width: 768px) {
        max-width: 300px;
    }

    @media (max-width: 480px) {
        max-width: 250px;
    }
`;
