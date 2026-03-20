import { useState } from "react";

export function Addtask(props) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicko no botão");
    props.adicionarTarefa(nome, descricao);

    setNome("");
    setDescricao("");
  };

  return (
    <div className="bg-neutral-800 rounded-md shadow p-6 mb-3">
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full outline-none rounded-md p-3 mb-2 bg-neutral-500 text-white font-bold"
          type="text"
          placeholder="Nome da tarefa"
        />
        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full p-3 bg-neutral-500 font-bold text-white outline-none rounded-md bg- col-span-1"
          type="text"
          placeholder="Descrição da tarefa"
        />
        <button
          type="submit"
          className="w-full p-3 shadow-sm bg-neutral-500 rounded-md mt-2 text-white font-bold"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
