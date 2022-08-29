import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaRegFileAlt, FaIdCard } from "react-icons/fa";
import SidebarItem from "../SidebarItem/SidebarItem";

function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  const openSidebar = () => {
    active(true);
  };

  return (
    <Container
      onMouseLeave={() =>
        setTimeout(() => {
          closeSidebar();
        }, 200)
      }
      sidebar={active}
      onMouseEnter={openSidebar}
    >
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} linkTo="/" pageName="Home" />
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
  );
}

export default Sidebar;
