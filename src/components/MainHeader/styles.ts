import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;

    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.tertiary};
    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;
