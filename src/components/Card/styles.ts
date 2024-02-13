import { styled } from 'styled-components';

export const Container = styled.div`
    width: 583px;
    padding: 20px;
    background-color: ${props => props.theme.colors.tertiary_50};
    margin-bottom: 50px;
`;

export const Image = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;

    img {
        width: 400px;
        height: 300px;
    }
`;

export const Title = styled.div`
    font-size: 16px;

    h2 {
        font-weight: 300;
        color: ${props => props.theme.colors.secondary};
    }

    h1 {
        font-weight: 700;
        margin: 18px 0;
    }

    p {
        font-weight: 300;
        color: ${props => props.theme.colors.secondary};
    }
`;

export const Link = styled.a`
    border: 1px solid ${props => props.theme.colors.secondary};
    padding: 10px 16px;
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;

    width: 156px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 24px;
        margin-right: 10px;
    }

    transition: .3s;

    &:hover {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.tertiary_50};
    }
`;
