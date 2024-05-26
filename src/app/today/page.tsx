import { RiCheckboxCircleLine, RiCheckLine } from "react-icons/ri";
import ProtectedLayout from "../layout/ProtectedLayout";
import { CardTask } from "@/components/cardTask";

export default function Today() {
  const today = new Date();
  return (
    <ProtectedLayout>
      <div className="p-4">
        <div>
          <h1 className="font-bold text-lg text-gray-800">Hoje</h1>
          <div className="flex items-center mt-2 text-gray-500">
            <RiCheckboxCircleLine className="text-xs me-1" />
            <span className="text-xs">1 tarefa</span>
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
          <CardTask
            title="Atividade 1"
            id={0}
            done={false}
            description={"Descrição da atividade 1 aqui chegando um texto maior para poder tratar asorbei dbniasod ias oiam"}
            date={new Date()}
            tags={[{
              id: 0,
              name: "Entrada",
              icon: RiCheckLine,
            }]}
          />
        </div>
      </div>
    </ProtectedLayout>
  );
}
