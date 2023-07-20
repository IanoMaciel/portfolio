import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;

    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.tertiary};
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: row;

    padding: 0 30px;
`;

export const Welcome = styled.h1`
    font-size: 28px;
    font-weight: 300;
`;

export const ToogleStyle = styled.div``;
