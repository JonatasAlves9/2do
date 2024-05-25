import React from "react";
import {
  RiBarChart2Line,
  RiSearch2Line,
  RiCalendar2Line,
  RiPriceTag2Line,
  RiCheckLine,
} from "react-icons/ri"; // Importar ícones
import { ActionMenu } from "./actionMenu";
import { ActionNewTask } from "./actionNewTask";

interface SidebarProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const actions = [
  {
    title: "Buscar",
    Icon: RiSearch2Line,
  },
  {
    title: "Entrada",
    Icon: RiBarChart2Line,
  },
  {
    title: "Hoje",
    Icon: RiCalendar2Line,
  },
  {
    title: "Em breve",
    Icon: RiCalendar2Line,
  },
  {
    title: "Filtros e etiquetas",
    Icon: RiPriceTag2Line,
  },
  {
    title: "Concluído",
    Icon: RiCheckLine,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleCollapse }) => {
  return (
    <div
      className={`bg-gray-100 text-white h-screen flex flex-col ${
        collapsed ? "w-0" : "w-64"
      } transition-width duration-300`}
    >
      <button onClick={toggleCollapse} className="p-4 focus:outline-none">
        {collapsed ? ">" : "<"}
      </button>
      <nav className="flex flex-col mt-4 p-4">
        <ActionNewTask />
        {actions.map((action, index) => (
          <ActionMenu key={index} title={action.title} Icon={action.Icon} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
