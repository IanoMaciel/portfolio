import type React from "react";
import styled from "styled-components";

interface IContentProps {
    children: React.ReactNode;
}

export default function Content({ children }: IContentProps) {
    return (
        <Container>
            { children }
        </Container>
    );
}

const Container = styled.main`
    padding: 0 5%;
    
`;