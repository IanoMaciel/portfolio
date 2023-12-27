import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary_50};

    display: flex;
    flex-direction: row;
    padding: 10px 27px;

    @media (max-width: 430px) {
        > div > p {
            font-size: 12px;
        }
    }
`

export const Contant = styled.div`
    width: 60%;

    p {
        font-weight: 200;
        font-size: 20px;
        color: ${props => props.theme.colors.secondary};
        margin: 30px 0;

    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        font-weight: 400;
    }

    @media (max-width: 430px) {
        width: 100%;
    }

`
export const Profile = styled.div`
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 430px) {
        display: none;
    }
`
