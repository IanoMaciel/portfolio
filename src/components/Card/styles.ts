import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 478px;
    padding: 30px;

    border: 1px solid ${props => props.theme.colors.gray
    };
    border-radius: 6px;
    background: transparent;

    margin-bottom: 20px;

    img {
        margin-left: 15px;
    }
`;

export const Information = styled.div`
    width: 55%;
    //background: green;

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

export const ImageProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    //  background: blueviolet;
`;
