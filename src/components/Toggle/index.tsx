import React from 'react';
import { Container, ToggleSelector } from './styles';
import { BsMoonStars, BsSun } from 'react-icons/bs';

interface IToggleProps {
    checked: boolean;
    onChange(): void;
}

export function Toggle({ checked, onChange }: IToggleProps) {
    return (
        <Container>
            <BsSun />
            <ToggleSelector
                onChange={onChange}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <BsMoonStars />
        </Container>
    );
}
