import { StyledForm, Container } from "./styles";
import FormInputWithLabelField from "../FormInputWithLabelField/FormInputWithLabelField";
import Button from "../Button/Button";
import { useState } from "react";
import database from "../../database/database";

function RegisterClientForm() {
  const [formPage, setFormPage] = useState(1);

  const databaseArr = database();
  console.log(databaseArr);

  return (
    <Container>
      <StyledForm>
        {formPage == 1 ? (
          <>
            <FormInputWithLabelField
              inputName="clientName"
              labelValue="Nome:"
            />
            <FormInputWithLabelField
              inputName="clientLastName"
              labelValue="Sobrenome:"
            />
            <FormInputWithLabelField
              inputName="clientEmail"
              labelValue="E-mail:"
            />
            <FormInputWithLabelField
              inputName="clientPhone"
              labelValue="Telefone:"
            />
          </>
        ) : formPage == 2 ? (
          <>
            <FormInputWithLabelField inputName="clientCep" labelValue="CEP:" />
            <FormInputWithLabelField
              inputName="clientAdressOne"
              labelValue="Endereço 1:"
            />
            <FormInputWithLabelField
              inputName="clientAdressTwo"
              labelValue="Endereço 2:"
            />
          </>
        ) : formPage == 3 ? (
          <>
            <FormInputWithLabelField
              inputName="clientBirthDate"
              labelValue="Data de nascimeneto:"
            />
            <FormInputWithLabelField inputName="clientCpf" labelValue="CPF:" />
            <FormInputWithLabelField
              inputName="clientMontlhyIncome"
              labelValue="Renda mensal:"
            />
            <Button
              marginTop="2rem"
              buttonValue="Salvar registro"
              callBack={(e) => {
                e.preventDefault();
                setFormPage(4);
              }}
            />
          </>
        ) : (
          formPage == 4 && (
            <>
              <h1>Cliente registrado com sucesso!</h1>

              <Button
                marginTop="10rem"
                buttonValue="Registrar novo cliente!"
                callBack={(e) => {
                  e.preventDefault();
                  setFormPage(1);
                }}
              />
            </>
          )
        )}

        {formPage < 3 && (
          <Button
            marginTop="2rem"
            buttonValue="Próximo"
            callBack={(e) => {
              e.preventDefault();
              setFormPage(formPage + 1);
            }}
          />
        )}
      </StyledForm>
    </Container>
  );
}

export default RegisterClientForm;
