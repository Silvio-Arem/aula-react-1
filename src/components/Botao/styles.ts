import styled from "styled-components";

const coresBotao = {
    success: "green",
    alert: "yellow",
    arror: "red",
};

interface BotaoDefaultProps {
    cor: string;
}

export const BotaoDefault = styled.button<BotaoDefaultProps>`
    border: none;
    background-color: green;
    color: #fff;
    border-radius: 20px;
    padding: 10px 30px;
`;
