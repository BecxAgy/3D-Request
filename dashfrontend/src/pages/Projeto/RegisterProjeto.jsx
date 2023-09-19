import React from "react";
import { HeaderMain } from "../../components";
import FormProjeto from "../../components/Projeto/FormProjeto";
import { useSelector } from "react-redux";
import AlertsMessage from "../../components/AlertsMessage";

function RegisterProjeto() {
  const { error } = useSelector((state) => state.projeto);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded-3xl">
      {error && <AlertsMessage message={error} type="error" />}
      <HeaderMain category={"Projetos"} title={"Cadastro"} />
      <FormProjeto />
    </div>
  );
}

export default RegisterProjeto;
