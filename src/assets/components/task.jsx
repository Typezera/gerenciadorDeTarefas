export function Task(props) {
  console.log(props);
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tarefas.map((tarefa) => (
        <li className="flex gap-2" key={tarefa.id}>
          <button className="bg-slate-400 text-left w-full text-white p-3 rounded-md">
            {tarefa.nome}
          </button>
          <button>teste</button>
        </li>
      ))}
    </ul>
  );
}
