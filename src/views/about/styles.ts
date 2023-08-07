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
`;


export const ContactContent = styled.div`
    p {
        margin-bottom: 30px;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LinkContact = styled.a`
    display: flex;
    align-items: center;

    font-size: 24px;
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
