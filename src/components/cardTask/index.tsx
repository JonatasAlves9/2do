import { RiCheckLine, RiMoreFill } from "react-icons/ri";
import "./styles.css";
import { IconType } from "react-icons";

export interface Task {
  id: number;
  title: string;
  done: boolean;
  description: string;
  date: Date;
  tags: {
    id: number;
    name: string;
    icon: IconType;
  }[];
}

interface IProps extends Task {
  onClick?: () => void;
}

export const CardTask = (task: IProps) => {
  return (
    <div
      className="relative CardTask flex gap-4 bg-white border rounded-md p-4 w-full mt-3"
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={task.onClick}
    >
      <div>
        <div className="rounded p-1 border mt-1 hover:shadow-sm hover:bg-slate-100 relative check">
          <RiCheckLine className="text-gray-500 text-xs icon-check" />
        </div>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 line-clamp-1">{task.title}</h2>
        <p className="text-gray-400 text-xs mt-1 line-clamp-1">
          {task.description}
        </p>
        <div>
          {task.tags.map((tag) => (
            <div key={tag.id} className="flex items-center mt-2 gap-1 text-xs">
              <tag.icon className="text-gray-500" />
              <span className="text-gray-500">{tag.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-3 right-3 p-1 rounded hover:bg-slate-100">
        <RiMoreFill className="text-gray-500 text-2xl icon" />
      </div>
    </div>
  );
};
