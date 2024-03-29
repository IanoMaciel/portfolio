import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    grid-template-columns: 88px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 'AS CT''AS CT';

    height: 100vh;

    @media (max-width: 430px) {
        grid-template-columns: 55px auto;
    }
`;
