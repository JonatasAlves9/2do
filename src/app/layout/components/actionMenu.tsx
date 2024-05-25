interface IProps {
  title: string;
  Icon: React.ComponentType<any>;
}

export const ActionMenu = (props: IProps) => {
  return (
    <a href="/dashboard" className="text-sm p-2 flex items-center text-gray-600 rounded-md hover:bg-gray-200">
      <props.Icon className="mr-2" />
      {props.title}
    </a>
  );
};
