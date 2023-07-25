import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.tertiary};

    padding: 30px;

    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 4px; /* Borda arredondada da alça */
    }
`;
