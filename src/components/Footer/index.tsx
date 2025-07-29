import { CopyrightIcon } from "@phosphor-icons/react";
import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            <CopyrightIcon size={24} />
            <span>Todos os direitos reservados</span>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
`;