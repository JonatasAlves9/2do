"use client";

import React from "react";
import { RiCheckLine, RiTextBlock } from "react-icons/ri";
import { Task } from "../cardTask";
import { Header } from "./header";
import { Container } from "./container";

interface IProps {
  toggleModal: () => void;
  isVisible: boolean;
  task: Task | undefined;
}

export const ModalTask = ({ isVisible, toggleModal, task }: IProps) => {
  const [editMode, setEditMode] = React.useState(false);

  if (!task) return null;
  return (
    <Container isVisible={isVisible}>
      <Header toggleModal={toggleModal} />
      <div className="flex justify-between items-start">
        <div className="flex flex-grow items-center p-4 w-full">
          <div className="flex gap-2 text-gray-500 w-full">
            <div className="rounded w-4 h-4 mt-4 border border-gray-500 hover:shadow-sm hover:bg-slate-100 relative check justify-center items-center flex">
              <RiCheckLine className="text-gray-500 text-xs icon-check" />
            </div>
            {!editMode ? (
              <div className="w-full">
                <div className="border rounded-md w-full p-2">
                  <input
                    className="text-xl line-clamp-1 bg-transparent w-full focus:outline-none focus:ring-0"
                    type="text"
                    value={task.title}
                  />
                  <textarea
                    className="text-gray-400 text-xs mt-3 bg-transparent w-full focus:outline-none focus:ring-0 resize-none overflow-hidden max-h-100"
                    placeholder={task.description}
                  />
                </div>
                <div className="flex items-center justify-end mt-2 dark:border-gray-600">
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                  >
                    Salvar
                  </button>
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    onClick={() => setEditMode(!editMode)}
                    className="py-2.5 px-5 ms-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setEditMode(!editMode)}
                style={{ cursor: "text", userSelect: "none" }}
                className="p-2 w-full"
              >
                <p className="text-xl line-clamp-1">{task.title}</p>
                <div className="flex items-center mt-2 gap-1 text-sm">
                  {/* <RiTextBlock className="text-gray-500" /> */}
                  <p className="text-gray-400 text-xs mt-1 ">
                    {task.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-grow items-center p-4 w-1/2">Side 2</div>
      </div>
    </Container>
  );
};
