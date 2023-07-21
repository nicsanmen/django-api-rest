import { useEffect, useState } from "react";
import { getAllLabels } from "../api/task.api";
import { LabelCard } from "./LabelCard";

export function LabelList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadLabels() {
      const res = await getAllLabels();
      setTasks(res.data);
    }
    loadLabels();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <LabelCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default LabelList;
