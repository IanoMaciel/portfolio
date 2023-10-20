import { styled } from 'styled-components';

export const Container = styled.div`
    @media (max-width: 428px) {

        > div > h1 {
            font-size: 30px;
        }

        > div > span {
            font-size: 12px;
        }
    }
`;

export const AboutMe = styled.div`
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
`;

export const AboutContent = styled.div`
    p {
        font-weight: 200;
        font-size: 20px;
        color: ${props => props.theme.colors.secondary};

        margin-bottom: 30px;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        font-weight: 400;
    }

    @media (max-width: 428px) {

        p, a {
            font-size: 12px;
        }
    }
`;

export const Contact = styled.div`
    margin-top: 40px;
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
`;

export const Networks = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContactLink = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 428px) {
        width: 100%;

        a {
            font-size: 12px
        }
    }
`;

export const LinkContact = styled.a`
    display: flex;
    align-items: center;

    margin-bottom: 15px;

    font-size: 24px;
    font-weight: 200;
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};

    transition: opacity .4s;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    svg {
        font-size: 24px;
        margin-right: 20px;
    }
`;

export const ProfilePhoto = styled.div`
    display: flex;
    position: relative;
    width: 50%;

    img {
        position: absolute;
        margin-top: -60px;
        margin-left: 200px;
        width: 300px;
        height: 300px;
    }

    @media (max-width: 428px) {
        img {
            display: none;
        }
    }
`;

