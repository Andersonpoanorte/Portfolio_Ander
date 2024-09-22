import Paragraph from "../Paragraph";
import Title from "../Title";
import { Card, LinkBotao } from "./styles";

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph tipo="secondary">Lista de tarefas feitas com VueJS</Paragraph>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
);

export default Project;
