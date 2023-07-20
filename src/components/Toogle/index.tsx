import React from 'react';
import { Container, ToogleSelector } from './styles';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export function Toogle() {
    return (
        <Container>
            <BsSun />
            <ToogleSelector
                onChange={() => {
                    console.log('test');
                }}
                checked={false}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <BsMoonStars />
        </Container>
    );
}
