interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = (props: IProps) => {
  return (
    <div>
      <label htmlFor="email" className="text-sm text-slate-500 font-semibold">
        {props.label}
      </label>
      <input
        {...props}
        className={`block w-full mt-1 mb-3 p-3 border border-gray-400 rounded bg-transparent text-xs ${props.className}`}
      />
    </div>
  );
};
