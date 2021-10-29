import React from "react";
import "./styles/main.css";

import { Button } from "./components/Button";
import { Divider } from "./components/Divider";
import { FormHeader } from "./components/Form/FormHeader";
import { TextInput } from "./components/TextInput";
import { FormFooter } from "./components/Form/FormFooter";

export default function App() {
  return (
    <main className="main">
      <FormHeader titulo="Um formulário simples" subtitulo="criado para aula de styled-components" />
      <Divider />
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <TextInput titulo="Nome" nome="nome" />
        <TextInput titulo="Sobrenome" nome="sobrenome" />
        <FormFooter>
          <Button cor="#7209b7" titulo="Salvar" onClick={() => { }} />
          <Button cor="#fca311" titulo="Cancelar" onClick={() => { }} />
        </FormFooter>
      </form>
    </main>
  );
}
