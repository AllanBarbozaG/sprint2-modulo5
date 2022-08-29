import { useEffect, useState } from "react";
import database from "../../database/database";
import ClientsListElement from "../ClientsListElement/ClientsListElement";
import { FaBars, FaSearch } from "react-icons/fa";
import { Container, StyledDiv } from "./style";

function ClientsList() {
  const [clients2, setClients2] = useState([]);

  console.log(clients2.length);

  useEffect(() => {
    fetch("http://localhost:3000/clientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setClients2(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const clients = database();
  console.log(clients);

  const [openClientInfos, setOpenClientInfos] = useState(false);

  const [clientToOpenInfos, setClientToOpeninfos] = useState();

  const [displayAllClients, setDisplayAllClients] = useState(true);

  console.log(
    `----------------------------------------------------Open cliente infos: ${openClientInfos}`
  );
  console.log(`Cliente to open: ${clientToOpenInfos}`);
  console.log(
    `Display todos clientes: ${displayAllClients} --------------------------------------------------`
  );

  const [clientToSearch, setClientToSearch] = useState("");
  console.log(clientToSearch);

  return (
    <>
      <label htmlFor="searchMethodSelect">Pesquisar por:</label>
      <select
        name="searchMethod"
        id="searchMethodSelect"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="#" hidden={true}></option>
        <option value="searchByName">Primeiro Nome</option>
        <option value="searchByLastName">Sobrenome</option>
        <option value="searchByCpf">CPF</option>
      </select>

      <input
        type="search"
        onChange={(e) => {
          setClientToSearch(e.target.value);

          return <ClientsListElement />;
        }}
        placeholder="Pesquisar cliente"
        name="searchClients"
        id="#"
      />

      <button
        onClick={() => {
          clients.map((client) => {
            return `${client.name} ${client.lastName}` == clientToSearch
              ? console.log(client)
              : false;
          });
        }}
      >
        <FaSearch type="button" />
      </button>
      <Container>
        {displayAllClients
          ? clients.map((client, index) => {
              return (
                <StyledDiv key={index}>
                  <ClientsListElement
                    callBack={() => {
                      setClientToOpeninfos(index);
                      setOpenClientInfos(!openClientInfos);
                      setDisplayAllClients(!displayAllClients);
                    }}
                    spanValue={`${client.name} ${client.lastName}`}
                    backgroundColor=""
                  />

                  <br />
                </StyledDiv>
              );
            })
          : openClientInfos && (
              <div>
                <span>
                  Cliente: {clients[clientToOpenInfos].name}{" "}
                  {clients[clientToOpenInfos].lastName}
                </span>
                <br />

                <span>Email :{clients[clientToOpenInfos].email} </span>
                <br />
                <span>Telefone: {clients[clientToOpenInfos].phone} </span>
                <br />
                <span>CEP: {clients[clientToOpenInfos].cep} </span>
                <br />
                <span>Endereço 1:{clients[clientToOpenInfos].adress1} </span>
                <br />
                <span>Endereço 2:{clients[clientToOpenInfos].adress2} </span>
                <br />
                <span>
                  Data de nascimento: {clients[clientToOpenInfos].birthDate}
                </span>
                <br />
                <span>CPF: {clients[clientToOpenInfos].cpf} </span>
                <br />
                <span>
                  Renda mensal: {clients[clientToOpenInfos].monthlyIncome}
                </span>

                <button
                  onClick={() => {
                    setDisplayAllClients(!displayAllClients);
                    setOpenClientInfos(!openClientInfos);
                  }}
                >
                  Voltar
                </button>
              </div>
            )}
      </Container>
    </>
  );
}

export default ClientsList;
