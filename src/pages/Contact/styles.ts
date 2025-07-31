import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  padding: 10% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  /* max-width: 1200px; */
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 60px 20px;
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(28px, 6vw, 36px);
  }

  @media (max-width: 480px) {
    font-size: clamp(24px, 7vw, 32px);
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.gray || '#999'};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ContentForm = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const FormGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    
    & > div:nth-child(3),
    & > div:nth-child(4) {
      grid-column: 1 / -1;
    }
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text || '#fff'};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.inputBg || '#2a2a2a'};
  border: 2px solid ${(props) => props.theme.colors.inputBorder || '#404040'};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${(props) => props.theme.colors.text || '#fff'};
  font-size: 14px;
  outline: none;
  width: 100%;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder || '#666'};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.secondary || '#9ACD32'};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.secondary || '#9ACD32'}20;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.inputHover || '#555'};
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 16px; /* Prevent zoom on iOS */
  }
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.inputBg || '#2a2a2a'};
  border: 2px solid ${(props) => props.theme.colors.inputBorder || '#404040'};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${(props) => props.theme.colors.text || '#fff'};
  font-size: 14px;
  outline: none;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder || '#666'};
    opacity: 0.8;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.secondary || '#9ACD32'};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.secondary || '#9ACD32'}20;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.inputHover || '#555'};
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 16px; /* Prevent zoom on iOS */
    min-height: 80px;
  }
`;

export const ButtonSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme.colors.primary || '#000'};
  font-weight: 600;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.secondary || '#9ACD32'};
  padding: 14px 28px;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-start;
  min-width: 120px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(154, 205, 50, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.secondary || '#9ACD32'};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 28px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 15px;
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
  
  @media (max-width: 768px) {
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
  }
`;