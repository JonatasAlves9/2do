interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  className?: string;
}

export const Button = (props: IProps) => {
  return (
    <button
      {...props}
      className={`mt-3 p-2 rounded shadow w-full text-sm ${props.className}`}
    >
      {props.children}
    </button>
  );
}