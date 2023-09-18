import { styled } from 'styled-components';

export const Container = styled.div`
    p {
        margin-top: 30px;
        color: ${props => props.theme.colors.secondary};
        font-size: 25px;
        font-weight: 300;
    }
    h1 {
        font-size: 40px;
        color: ${props => props.theme.colors.primary};
        margin-top: 30px;
    }

    span {
        font-size: 20px;
        color: ${props => props.theme.colors.secondary}
    }

    a {
        text-decoration: none;
        font-weight: 800;
        color: ${props => props.theme.colors.secondary};
    }
`;


export const Contact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    div {
        width: 70%;
    }

    p {
        margin-bottom: 30px;
    }

`;

export const ContactLink = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LinkContact = styled.a`
    display: flex;
    align-items: center;

    font-size: 24px;
    font-weight: 300;
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    margin: 5px 0;

    transition: opacity .4s;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    svg {
        margin-right: 20px;
    }
`;

export const ContactImage = styled.img`
    width: 300px;
    height: 300px;
`;

