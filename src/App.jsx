import { useState } from "react";
import { Task } from "./assets/components/task";
import "./index.css";
import { Addtask } from "./assets/components/addTask";

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

  const removerItem = (idTarefa) => {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== idTarefa);
    setTarefas(novaLista);
  };

  const adicionarTarefa = (nome, descricao) => {
    const novaTarefa = {
      id: Math.random(),
      nome,
      descricao,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div className="flex justify-center bg-neutral-900 h-screen w-screen p-7">
      <div className="w=[500px]">
        <h1 className="text-3xl mb-2 text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Addtask adicionarTarefa={adicionarTarefa} />
        <Task tarefas={tarefas} funcao={removerItem} />
      </div>
    </div>
  );
}

export default App;
