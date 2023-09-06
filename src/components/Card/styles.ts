import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px;

    border: 1px solid ${props => props.theme.colors.gray
    };
    border-radius: 6px;
    background: transparent;

    margin-bottom: 20px;
`;

export const Information = styled.div`
    width: 60%;

    h3 {
        font-size: 30px;
        color: ${props => props.theme.colors.primary};
    }

    p {
        color: ${props => props.theme.colors.secondary};
        font-weight: 300;
        font-size: 25px;
        text-align: justify;

        margin: 15px 0;
    }

    a {
        color: ${props => props.theme.colors.primary};
        font-size: 20px;
        font-weight: 300;
        text-decoration: none;

        padding: 5px 10px;
        background-color: ${props => props.theme.colors.button};

        border-radius: 15px;
    }
`;
