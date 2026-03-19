import { ChevronRightIcon, TrashIcon } from "lucide-react";

export function Task(props) {
  console.log(props);
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tarefas.map((tarefa) => (
        <li className="flex gap-2" key={tarefa.id}>
          <button className="bg-slate-400 text-left w-full text-white p-3 rounded-md">
            {tarefa.nome}
          </button>
          <button
            className="p-3 bg-slate-400 rounded-md text-white"
            onClick={() => props.funcao(tarefa.id)}
          >
            <TrashIcon />
          </button>
          <button className="p-3 bg-slate-400 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
