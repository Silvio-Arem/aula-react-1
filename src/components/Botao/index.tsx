interface BotaoProps {
    texto: string;
    acao: () => void;
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.acao}>{props.texto}</button>
    )
}