import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  padding: 20px;
  border-radius: 4px;
`;

export const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Type = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Date = styled.small`
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Chips = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  color:${(props) => props.theme.colors.white};
  padding: 3px 10px;
  border-radius: 30px;
`;

export const Link = styled.a`
  display: flex;
  gap: 10px;
  text-decoration: none;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color:${(props) => props.theme.colors.white};
  border-radius: 4px;
  transition: color 0.3s;
  &:hover {
    opacity: .7;
  }
`;
