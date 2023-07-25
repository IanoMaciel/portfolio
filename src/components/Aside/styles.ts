import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;

    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.tertiary};
    border-right: 1px solid ${props => props.theme.colors.gray};

    display: flex;
    justify-content: center;
`;


export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;

    width: 80%;
`;


export const MenuLink = styled.a`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    margin: 10px 0;
    padding: 10px;

    font-size: 24px;
    font-weight: 300;

    transition: opacity .3s;

    svg {
        margin-right: 20px;
        font-size: 24px;
    }

    &:hover {
        opacity: .7;
    }
`;
