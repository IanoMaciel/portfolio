import styled from 'styled-components';
import Switch, { ReactSwitchProps} from 'react-switch';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        margin: 0 10px;
    }

    svg {
        font-size: 22px;
        margin: 0 10px;
        color: ${props => props.theme.colors.primary};
    }
`;

export const ToogleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.secondary,
        offColor: theme.colors.secondary,
    })
)<ReactSwitchProps>``;
