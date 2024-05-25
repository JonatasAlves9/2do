import { RiAddLine } from "react-icons/ri";

export const ActionNewTask = () => {
  return (
    <a
      href="/dashboard"
      className="text-sm p-2 flex items-center text-purple-800 rounded-md hover:bg-gray-200 mb-4 font-bold"
    >
      <svg
        className="w-6 h-6 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
          clip-rule="evenodd"
        />
      </svg>
      Adicionar tarefa
    </a>
  );
};