import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;

    svg {
        font-size: 50px;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-left: 35px;
        color: ${props => props.theme.colors.secondary};

        transition: opacity .4s;

        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`;
