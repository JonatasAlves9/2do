"use client";

import React from "react";
import { RiCheckLine, RiTextBlock } from "react-icons/ri";
import { Task } from "../cardTask";

interface IProps {
  toggleModal: () => void;
  isVisible: boolean;
  task: Task | undefined;
}

export const ModalTask = ({ isVisible, toggleModal, task }: IProps) => {
  const [editMode, setEditMode] = React.useState(false);

  if (!task) return null;
  return (
    <>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="false"
        className={`${
          isVisible ? "block" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center w-full  md:inset-0  bg-gray-900 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-3 md:p-3 border-b rounded-t dark:border-gray-600">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                # Gerenciamento
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-grow items-center p-4 w-5/3">
                <div className="flex gap-2 text-white w-full">
                  <div className="rounded p-1 w-4 h-4 mt-4 border border-white hover:shadow-sm hover:bg-slate-100 relative check">
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
                          className="text-gray-400 text-sm mt-3 bg-transparent w-full focus:outline-none focus:ring-0 resize-none overflow-hidden max-h-100"
                          placeholder={task.description}
                        />
                      </div>
                      <div className="flex items-center justify-end mt-2 dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Salvar
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          onClick={() => setEditMode(!editMode)}
                          className="py-2.5 px-5 ms-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                        <RiTextBlock className="text-gray-500" />
                        <p className="text-gray-400 text-xs mt-1 line-clamp-1">
                          {task.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-grow items-center p-4">Side 2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
