import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div``;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.span``;

export const Card = styled.a`
  cursor: pointer;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleProjeto = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;

export const DescriptionProjeto = styled.span`
  color: ${(props) => props.theme.colors.gray};
`;

export const Skill = styled.span``;
