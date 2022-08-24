import { useEffect, useState } from "react";
import database from "../../database/database";
import ClientsListElement from "../ClientsListElement/ClientsListElement";

import { Container, StyledDiv } from "./style";

function ClientsList() {

  const [clients2, setClients2] = useState([])

  console.log(clients2.length)
  
  
  useEffect(() => {
    fetch('http://localhost:3000/clientes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setClients2(data)
      
    })
    .catch((error) => console.log(error))

  }, [])
  
  

  const clients = database();
  console.log(clients.length)

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

  return (
    <Container>
      {displayAllClients
        ? clients2.map((client, index) => {
            return (
              <StyledDiv key={index}>
                <ClientsListElement
                  callBack={() => {
                    setClientToOpeninfos(index);
                    setOpenClientInfos(!openClientInfos);
                    setDisplayAllClients(!displayAllClients);
                    console.log("oi");
                  }}
                  spanValue={`${client.name} ${client.lastName}`}
                />

                <br />
              </StyledDiv>
            );
          })
        : openClientInfos && (
            <div>
              <span>
                Cliente: {clients2[clientToOpenInfos].name}{" "}
                {clients2[clientToOpenInfos].lastName}
              </span>
              <br />

              <span>Email :{clients2[clientToOpenInfos].email} </span>
              <br />
              <span>Telefone: {clients2[clientToOpenInfos].phone} </span>
              <br />
              <span>CEP: {clients2[clientToOpenInfos].cep} </span>
              <br />
              <span>Endereço 1:{clients2[clientToOpenInfos].adress1} </span>
              <br />
              <span>Endereço 2:{clients2[clientToOpenInfos].adress2} </span>
              <br />
              <span>
                Data de nascimento: {clients2[clientToOpenInfos].birthDate}
              </span>
              <br />
              <span>CPF: {clients2[clientToOpenInfos].cpf} </span>
              <br />
              <span>
                Renda mensal: {clients2[clientToOpenInfos].monthlyIncome}
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
  );
}

export default ClientsList;
