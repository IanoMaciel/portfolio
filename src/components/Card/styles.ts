import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 30px;

    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 6px;
    background: transparent;

    margin-bottom: 20px;
`;

export const Information = styled.div`
    width: 47%;

    h3 {
        font-size: 20px;
        font-weight: 800;
        color: ${props => props.theme.colors.primary};
    }

    p {
        color: ${props => props.theme.colors.secondary};
        font-weight: 200;
        font-size: 20px;
        margin: 15px 0;
    }

    a {
        color: ${props => props.theme.colors.primary};
        font-size: 20px;
        font-weight: 200;
        text-decoration: none;

        padding: 5px 10px;
        background-color: ${props => props.theme.colors.button};

        border-radius: 15px;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 430px) {

        h3 {
            font-size: 16px;
        }

        p {
            font-size: 12px;
        }

        a {
            font-size: 12px;
        }
    }
`;

export const ImageProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    @media (max-width: 1024px) {
        display: none;
    }
`;
