interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = (props: IProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="email" className="text-sm text-slate-500 font-semibold">
          {props.label}
        </label>
        {props.error && (
          <span className="text-red-500 text-xs">{props.error}</span>
        )}
      </div>
      <input
        {...props}
        className={`block w-full mt-1 mb-3 p-3 border border-gray-400 rounded bg-transparent text-xs ${props.className}`}
      />
    </div>
  );
};
