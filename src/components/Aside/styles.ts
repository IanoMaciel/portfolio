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
    justify-content: space-between;
    align-items: center;
    margin: 70px 0;

    width: 80%;
`;


export const MenuLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    margin: 10px 0;
    padding: 10px;

    font-size: 12px;
    font-weight: 300;

    transition: opacity .3s;

    svg {
        margin-bottom: 4px;
        font-size: 24px;
    }

    &:hover {
        opacity: .7;
    }
`;

export const ButtonTheme = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: transparent;

    span {
        color: ${props => props.theme.colors.secondary};
        font-size: 12px;
    }

    svg {
        margin-bottom: 4px;
        font-size: 24px;
        color: ${props => props.theme.colors.secondary}
    }

    &:hover {
        opacity: .7;
    }
`;
