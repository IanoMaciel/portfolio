import { v4 as uuidv4 } from 'uuid'

export interface IData {
    id: string;
    development: string;
    title: string;
    description: string;
    imageURL: string;
    repositoryURL: string;

}
export const repository: IData[] = [
    {
        id: uuidv4(),
        development: 'FRONT END',
        title: 'Minha Carteira',
        description: 'Sistema web que monitora as entradas e saídas de dinheiro do usuário, fornecendo um dashboard para melhor visualização dos dados. O objetivo deste é simular uma carteira real, permitindo que o usuário visualize facilmente seus ganhos e saídas.',
        imageURL: require('../assets/imageMyWallet.png'),
        repositoryURL: 'https://github.com/IanoMaciel/my-wallet'
    },
    {
        id: uuidv4(),
        title: 'To Do',
        development: 'FULL STACK',
        description: 'Ferramenta que busca auxiliar as tarefas cotidiana dos usuários a qual é possível realizar agendamentos de tarefas e notificar tarefas atrasadas. A aplicação está disponível tanto para web quando para dispositivos mobile (em desenvolvimento).',
        imageURL: require('../assets/imageToDo.png'),
        repositoryURL: 'https://github.com/IanoMaciel/ToDo'
    },
    {
        id: uuidv4(),
        title: 'Uni+',
        development: 'FRONT END',
        description: 'A proposta deste produto é oferecer uma solução para submeter horas relacionadas às Atividades Acadêmicas, Científicas e Culturais (AACC), facilitando o envio de documentos, além de permitir ao aluno consultar qual modalidade ele precisa concluir para o preenchimento de suas horas.',
        imageURL: require('../assets/imageUni.png'),
        repositoryURL: 'https://github.com/IanoMaciel/front-end-aacc'
    },
    {
        id: uuidv4(),
        title: 'Role Play',
        development: 'API',
        description: 'Roleplay é um sistema de gerenciamento de mesas de RPG. Cada mesa é liderada por um mestre, responsável por cadastrar a mesa e estabelecer as regras do jogo. Jogadores interessados podem buscar por uma mesa e solicitar ingresso, aguardando a aprovação do mestre para sua solicitação.',
        imageURL: require('../assets/softwareTest.png'),
        repositoryURL: 'https://github.com/IanoMaciel/roleplay-api'
    },
]
