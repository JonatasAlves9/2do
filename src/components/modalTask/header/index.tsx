interface Props {
  toggleModal: () => void;
}

export const Header = ({ toggleModal }: Props) => {
  return (
    <div className="flex items-center justify-between p-3 md:p-3 border-b rounded-t dark:border-gray-600">
      <h3 className="text-sm font-semibold text-gray-900 ">
        # Gerenciamento
      </h3>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
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
  );
};
