import { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav>
      <Container>
        <FaBars onMouseEnter={showSidebar} onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </Container>
    </nav>
  );
}

export default Menu;
