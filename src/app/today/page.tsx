import {
  RiCheckboxCircleLine,
  RiCheckLine,
  RiKanbanView,
  RiRemixiconLine,
  RiRemixRunLine,
  RiSettings2Line,
  RiSettings3Line,
  RiSettings5Line,
} from "react-icons/ri";
import ProtectedLayout from "../layout/ProtectedLayout";
import { CardTask } from "@/components/cardTask";
import { TaskList } from "@/components/taskList";

export default function Today() {
  const today = new Date();
  return (
    <ProtectedLayout>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-lg text-gray-800">Hoje</h1>
            <div className="flex items-center mt-2 text-gray-500">
              <RiCheckboxCircleLine className="text-xs me-1" />
              <span className="text-xs">1 tarefa</span>
            </div>
          </div>
          <div>
            <a
              href="/today/new"
              className="text-sm p-2 flex items-center text-gray-500 rounded-md hover:bg-gray-200 mb-4 font-bold"
            >
              <RiKanbanView className="w-6 h-6 mr-2" />
              Visualizar
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm text-gray-500 font-bold">
              {today.toLocaleString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}{" "}
              - Hoje
            </p>
          </div>
          <TaskList />
        </div>
      </div>
    </ProtectedLayout>
  );
}
