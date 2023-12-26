import * as S from "./styles";

export default function AboutMeCard() {
    return (
        <S.Container>
            <S.Contant>
                <p>
                    Olá! Sou Engenheiro de Software formado pelo{' '}
                    <a
                        href="https://icet.ufam.edu.br/ensino/graduacao/engenharia-de-software/"
                        target="_blank"
                    >
                        ICET/UFAM (2023)
                    </a>. Possuo interesse em Desenvolvimento de Software para Web e Mobile, com ênfase no back-end utilizando Node.js e Java com Spring Boot.
                </p>

                <p>
                    Possuo experiência em Java, Spring Boot, Amazon Web Services, JavaScript moderno, TypeScript, Node.js, React, React Native,  RESTful API e ferramentas de controle de versão e automação.
                </p>

                <p>
                    Em 2022, foi bolsista no{' '}
                    <a href="https://super.ufam.edu.br/" target="_blank">
                        Projeto Super
                    </a>
                    . Durante o projeto, foram realizadas pesquisas na área da Engenharia de Software, com foco especial na Gerência de Configuração de Software.
                </p>

                <p>
                    Minha paixão pelo desenvolvimento de software permeia todo o ciclo de vida do projeto, desde a concepção da ideia até a entrega do produto final.
                </p>
            </S.Contant>
            <S.Profile>
                <img src={require('../../assets/myProfile.png')} alt="Profile Photo" />
            </S.Profile>
        </S.Container>
    )
}
