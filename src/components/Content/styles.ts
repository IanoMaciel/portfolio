import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    color: ${props => props.theme.colors.primary};

    background-color: ${props => props.theme.colors.tertiary_100};

    padding: 70px 200px;

    height: calc(100vh);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary_100};
        border-radius: 4px; /* Borda arredondada da alça */
    }

    @media (max-width: 1024px) {
        padding: 70px 50px;
    }

    @media (max-width: 428px) {
        padding: 70px 20px;
    }
`;
