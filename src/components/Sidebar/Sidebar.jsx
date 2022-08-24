import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaRegFileAlt, FaIdCard } from "react-icons/fa";
import SidebarItem from "../SidebarItem/SidebarItem";

function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <div>
      <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
          <SidebarItem
           Icon={FaHome}
           linkTo="/"
           pageName="Home"
          />
          <SidebarItem
            Icon={FaRegFileAlt}
            linkTo="/cadastrar-novo-cliente"
            pageName="Cadastrar"
          />
          <SidebarItem
            Icon={FaIdCard}
            linkTo="/lista-de-clientes"
            pageName="Clientes"
          />
        </Content>
      </Container>
    </div>
  );
}

export default Sidebar;
