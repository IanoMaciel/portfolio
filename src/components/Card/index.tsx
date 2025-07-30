import { GithubLogoIcon } from "@phosphor-icons/react";
import * as S from "./styles";

// interface ICardProps {
//   type: string;
//   year: string;
//   title: string;
//   description: string;
//   skill: [];
//   link: string;
// }

export default function Card() {
  return (
    <S.Container>
      <S.ContentColumn>
        <S.ContentLine>
          <S.Type>API REST</S.Type>
          <S.Date>2025</S.Date>
        </S.ContentLine>

        <S.Title>Role Player</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </S.Description>

        <div style={{ display: "flex", gap: "10px" }}>
          <S.Chips>PHP</S.Chips>
          <S.Chips>Laravel</S.Chips>
          <S.Chips>MySQL</S.Chips>
        </div>
      </S.ContentColumn>

      <S.Link href="#">
        <GithubLogoIcon size={20} weight="fill" />
        Repositório
      </S.Link>
    </S.Container>
  );
}