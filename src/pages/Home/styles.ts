import styled, { keyframes, css } from "styled-components";

const decorativeRotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
        padding: 40px 20px;
    }
`;

export const Information = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 1024px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h3`
   color: ${(props) => props.theme.colors.secondary};
   font-size: 20px;

   @media (max-width: 768px) {
        font-size: 18px;
   }
`;

export const Subtitle = styled.h1`
    font-weight: 500;
    font-size: 40px;
    color: ${(props) => props.theme.colors.white};

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Social = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 1024px) {
        justify-content: center;
    }
`;

export const LinkSocial = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    background: #333333;
    padding: 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;

    &:hover {
        opacity: .7;
        transform: translateY(-2px);
    }
`;

export const Action = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: center;
    }
`;

export const LinkContact = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    background: ${(props) => props.theme.colors.secondary};
    padding: 10px 20px;
    transition: all .3s ease;

    &:hover {
        opacity: .7;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`;

export const LinkProject = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 10px 20px;
    transition: all .3s ease;

    &:hover {
        opacity: .7;
        transform: translateY(-2px);
        border: none;
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.primary};
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`;

export const ContentProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
    overflow: visible;

    @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Profile = styled.img`
    width: 90%;
    height: auto;
    max-width: 400px;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
    border-radius: 100%;

    @media (max-width: 768px) {
        max-width: 300px;
    }

    @media (max-width: 480px) {
        max-width: 250px;
    }
`;

// Círculos decorativos
export const DecorativeCircle = styled.div<{ $variant: 'primary' | 'secondary' }>`
    position: absolute;
    border-radius: 50%;
    border: 2px solid;
    z-index: 1;
    
    ${props => props.$variant === 'primary' && css`
        width: 150px;
        height: 150px;
        top: 10%;
        right: 10%;
        border-color: rgba(174, 230, 19, 0.52);
        animation: ${decorativeRotate} 20s linear infinite;
    `}
    
    ${props => props.$variant === 'secondary' && css`
        width: 100px;
        height: 100px;
        bottom: 15%;
        left: 10%;
        border-color: rgba(174, 230, 19, 0.52);
        animation: ${decorativeRotate} 15s linear infinite reverse;
    `}
    
    @media (max-width: 768px) {
        ${props => props.$variant === 'primary' && css`
            width: 100px;
            height: 100px;
        `}
        
        ${props => props.$variant === 'secondary' && css`
            width: 70px;
            height: 70px;
        `}
    }
`;
