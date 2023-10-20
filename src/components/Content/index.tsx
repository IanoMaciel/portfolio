import { ReactNode } from 'react';
import { Container } from './styles';

interface IContectProps {
    children: ReactNode;
}

export function Content({ children }: IContectProps) {
    return <Container>{children}</Container>;
}
