import styled from "styled-components";

// Breakpoints
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px'
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  padding: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  height: fit-content;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.primary || props.theme.colors.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
    gap: 16px;
    border-radius: 6px;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 18px;
    gap: 20px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    padding: 24px;
    gap: 30px;
    border-radius: 12px;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    gap: 14px;
  }
`;

export const ContentLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  /* Mobile - Stack vertically on very small screens */
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const Type = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 11px;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const Date = styled.small`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 11px;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  margin: 0;
  line-height: 1.3;

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    line-height: 1.2;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 19px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  line-height: 1.5;
  margin: 0;

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 1.4;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    gap: 4px;
    margin-top: 2px;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    gap: 7px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    gap: 8px;
    margin-top: 6px;
  }
`;

export const Chip = styled.span`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  padding: 3px 10px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 2px 8px;
    font-size: 10px;
    border-radius: 12px;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 4px 11px;
    font-size: 12px;
    border-radius: 18px;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    padding: 5px 14px;
    font-size: 12px;
    border-radius: 20px;
  }
`;

export const RepositoryLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  padding: 10px 14px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 13px;
  width: 100%;
  
  &:hover {
    opacity: 0.8;
    transform: translateX(2px);
  }
  
  &:active {
    transform: translateX(0);
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 12px;
    font-size: 12px;
    gap: 6px;
    border-radius: 4px;
  }

  /* Tablet */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 11px 16px;
    font-size: 14px;
    gap: 9px;
    width: fit-content;
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    padding: 12px 18px;
    font-size: 14px;
    gap: 10px;
    border-radius: 8px;
    width: fit-content;
  }
`;