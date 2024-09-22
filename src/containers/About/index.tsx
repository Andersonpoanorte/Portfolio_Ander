import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { GithubSecao } from "./styles";

const About = () => (
  <section>
    <Title fontSize={16}>About Me</Title>
    <Paragraph tipo="primary">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nobis
      architecto a dolor, sint deleniti, maiores eius fugit temporibus incidunt
      sunt quasi explicabo, illo tempore nihil cum. Voluptates, natus commodi.
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Andersonpoanorte&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Andersonpoanorte&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default About;
