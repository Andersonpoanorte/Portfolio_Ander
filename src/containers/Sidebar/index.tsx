import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { BtnTheme, Description, SidebarContainer } from "./styles";

const Sidebar = () => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Anderson de Sousa</Title>
        <Paragraph tipo="secondary" fontSize={16}>
          Andersonpoanorte
        </Paragraph>
        <Description tipo="primary" fontSize={12}>
          Engenheiro Front-end
        </Description>
        <BtnTheme>Trocar tema</BtnTheme>
      </SidebarContainer>
    </aside>
  </>
);

export default Sidebar;
