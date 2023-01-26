import {BotaoDefault} from "./styles";

interface BotaoProps {
    texto: string;
    acao?: () => void;
}

export default function Botao(props: BotaoProps) {
    return (
        <BotaoDefault onClick={props.acao}>{props.texto}</BotaoDefault>
    )
}