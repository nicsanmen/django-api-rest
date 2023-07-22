import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between px-3 py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
      </Link>
      <button className="bg-green-500 p-3 flex rounded-lg">
        <Link to="/labels/">Labels</Link>
      </button>
      <button className="bg-green-500 p-3 flex rounded-lg">
        <Link to="/labels/new">Create Label</Link>
      </button>
      <button className="bg-indigo-500 p-3 rounded-lg">
        <Link to="/tasks/new">Create Task</Link>
      </button>
    </div>
  );
}
