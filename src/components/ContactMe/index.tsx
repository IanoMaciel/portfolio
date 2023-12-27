import * as S from './styles'

import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";


export default function ContactMe() {
    return (
        <S.Container>
            <a href="https://github.com/IanoMaciel" target="_blank">
                <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/iano-maciel-52a7401ba/" target="_blank">
                <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/ianooo_/" target="_blank">
                <AiFillInstagram />
            </a>

            <a href="https://wa.me/5592986338449">
                <FaWhatsappSquare />
            </a>

            <a href="mailto:ianomaciel685@icloud.com?subject=sbject text">
                <MdEmail />
            </a>
        </S.Container>
    )
}
