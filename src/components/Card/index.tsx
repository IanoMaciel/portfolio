import { GithubLogoIcon } from "@phosphor-icons/react";
import * as S from "./styles";

interface ICardProps {
  type: string;
  year: string;
  title: string;
  description: string;
  skills: string[];
  repositoryLink: string;
}

export default function Card({
  type,
  year,
  title,
  description,
  skills,
  repositoryLink
}: ICardProps) {
  return (
    <S.Container>
      <S.ContentColumn>
        <S.ContentLine>
          <S.Type>{type}</S.Type>
          <S.Date>{year}</S.Date>
        </S.ContentLine>

        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.SkillsContainer>
          {skills.map((skill, index) => (
            <S.Chip key={index}>{skill}</S.Chip>
          ))}
        </S.SkillsContainer>
      </S.ContentColumn>

      <S.RepositoryLink href={repositoryLink} target="_blank" rel="noopener noreferrer">
        <GithubLogoIcon size={20} weight="fill" />
        Repositório
      </S.RepositoryLink>
    </S.Container>
  );
}