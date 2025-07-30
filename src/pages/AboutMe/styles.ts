import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;
  padding: 0 10%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;