export function Addtask() {
  return (
    <div className="bg-neutral-800 rounded-md shadow p-6 mb-3">
      <form>
        <input
          className="w-full outline-none rounded-md p-3 mb-2 bg-neutral-500 text-white font-bold"
          type="text"
          placeholder="Nome da tarefa"
        />
        <input
          className="w-full p-3 bg-neutral-500 font-bold text-white outline-none rounded-md bg- col-span-1"
          type="text"
          placeholder="Descrição da tarefa"
        />
        <button className="w-full p-3 bg-neutral-500 rounded-md mt-2 text-white font-bold">
          Adicionar
        </button>
      </form>
    </div>
  );
}
