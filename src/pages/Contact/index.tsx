import * as S from './styles';
import mailbox from '../../assets/mailbox.svg';
import { PaperPlaneTiltIcon } from '@phosphor-icons/react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Form submitted:', formData);
  };

  return (
    <S.Container id="contact">
      <S.ContentWrapper>
        <S.Header>
          <S.Title>Contato</S.Title>
          <S.Description>
            Olá! Tudo bem? Crie este canal para tornar a comunicação mais fácil. Se tiver alguma dúvida ou precisar entrar em contato, sinta-se à vontade para enviar uma mensagem.
          </S.Description>
        </S.Header>

        <S.ContentForm>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGrid>
              <S.ContentColumn>
                <S.Label>Nome *</S.Label>
                <S.Input
                  type="text"
                  name="name"
                  placeholder="Campo obrigatório"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </S.ContentColumn>

              <S.ContentColumn>
                <S.Label>E-mail *</S.Label>
                <S.Input
                  type="email"
                  name="email"
                  placeholder="Campo obrigatório"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </S.ContentColumn>

              <S.ContentColumn>
                <S.Label>Assunto *</S.Label>
                <S.Input
                  type="text"
                  name="subject"
                  placeholder="Campo obrigatório"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </S.ContentColumn>

              <S.ContentColumn>
                <S.Label>Mensagem*</S.Label>
                <S.TextArea
                  name="message"
                  placeholder="Campo obrigatório"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </S.ContentColumn>
            </S.FormGrid>

            <S.ButtonSend type="submit">
              <PaperPlaneTiltIcon size={20} />
              Enviar
            </S.ButtonSend>
          </S.Form>
        </S.ContentForm>
      </S.ContentWrapper>

      <S.ImageContainer>
        <S.Image src={mailbox} alt="Imagem de e-mail" />
      </S.ImageContainer>
    </S.Container>
  );
}