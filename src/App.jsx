import { useState } from "react";
import { Task } from "./assets/components/task";
import "./index.css";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      nome: "Pintar um quadro",
      descricao: "Tirar algumas horas para fazer uma pintura",
      concluida: false,
    },
    {
      id: 2,
      nome: "Jogar bola",
      descricao: "jogar um futebol com os amigos",
      concluida: false,
    },
    {
      id: 3,
      nome: "Treinar xadrez",
      descricao: "me preparar para o campeonato de xadrez",
      concluida: false,
    },
    {
      id: 4,
      nome: "Fazer bolo",
      descricao: "Fazer um bolo de fuba",
      concluida: false,
    },
  ]);

  return (
    <div className="flex justify-center bg-slate-300 h-screen w-screen p-7">
      <div className="w=[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Task tarefas={tarefas} />
      </div>
    </div>
  );
}

export default App;
