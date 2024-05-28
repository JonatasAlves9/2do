interface Props {
  isVisible: boolean;
  children: React.ReactNode;
}

export const Container = ({ isVisible, children }: Props) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="false"
      className={`${
        isVisible ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center w-full  md:inset-0  bg-gray-900 bg-opacity-50`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
};
