"use client";
import { RiCheckLine } from "react-icons/ri";
import { CardTask, Task } from "../cardTask";
import { ModalTask } from "../modalTask";
import React from "react";

const tasks = [
  {
    title: "Atividade 1",
    id: 0,
    done: false,
    description:
      "Descrição da atividade 1 aqui chegando um texto maior para poder tratar asorbei dbniasod ias oiam",
    date: new Date(),
    tags: [
      {
        id: 0,
        name: "Entrada",
        icon: RiCheckLine,
      },
    ],
  },
  {
    title: "Atividade 2",
    id: 1,
    done: false,
    description:
      "Descrição da atividade 2 aqui chegando um texto maior para poder tratar asorbei dbniasod ias oiam",
    date: new Date(),
    tags: [
      {
        id: 0,
        name: "Entrada",
        icon: RiCheckLine,
      },
    ],
  },
  {
    title: "Atividade 3",
    id: 2,
    done: false,
    description:
      "Descrição da atividade 3 aqui chegando um texto maior para poder tratar asorbei dbniasod ias oiam",
    date: new Date(),
    tags: [
      {
        id: 0,
        name: "Entrada",
        icon: RiCheckLine,
      },
    ],
  },
  {
    title: "Atividade 4",
    id: 3,
    done: false,
    description:
      "Descrição da atividade 4 aqui chegando um texto maior para poder tratar asorbei dbniasod ias oiam",
    date: new Date(),
    tags: [
      {
        id: 0,
        name: "Entrada",
        icon: RiCheckLine,
      },
    ],
  },
  {
    title: "Atividade 5",
    id: 4,
    done: false,
    description:
      "Descrição da atividade 5 aqui chegando um texto maior para poder tratar asorbei dbniasod ias oiam",
    date: new Date(),
    tags: [
      {
        id: 0,
        name: "Entrada",
        icon: RiCheckLine,
      },
    ],
  },
];

export const TaskList = () => {
  const [taskSelected, setTaskSelected] = React.useState<Task>();
  return (
    <div className="w-1/4">
      {tasks.map((task) => (
        <CardTask
          key={task.id}
          title={task.title}
          id={task.id}
          done={task.done}
          description={task.description}
          date={task.date}
          tags={task.tags}
          onClick={() => setTaskSelected(task)}
        />
      ))}
      <ModalTask
        isVisible={Boolean(taskSelected)}
        toggleModal={() => setTaskSelected(undefined)}
        task={taskSelected}
      />
    </div>
  );
};
