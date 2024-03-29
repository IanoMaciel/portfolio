import { styled } from 'styled-components';


export const Container = styled.div`
`;


export const ProjectTitle = styled.div`
    margin-bottom: 50px;
    h1 {
        font-weight: 800;
        font-size: 50px;
        color: ${props => props.theme.colors.primary}
    }
    span {
        font-weight: 200;
        font-size: 20px;
        color: ${props => props.theme.colors.secondary}
    }

    @media (max-width: 430px) {

        h1 {
            font-size: 30px;
        }

        span {
            font-size: 12px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
