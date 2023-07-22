import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updateTask } from "../api/task.api";
import { getAllLabels } from "../api/task.api";
import { toast } from "react-hot-toast";

export function TaskCard({ task }) {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(task.completed);
  const [availableLabels, setAvailableLabels] = useState([]);

  useEffect(() => {
    getAllLabels().then((labels) => {
      console.log(labels); // Imprime los datos de las etiquetas en la consola
      setAvailableLabels(labels);
    });
  }, []);

  const handleCheckboxChange = () => {
    const updatedTask = { ...task, completed: !completed };
    updateTask(task.id, updatedTask).then(() => {
      setCompleted(!completed);
      if (!completed) {
        toast.success("Task completed");
      }else{
        toast.error("Task uncompleted");
      }
    });
  };

  // const translatedLabels = task.labels.map((labelId) => {
  //   const label = availableLabels.find((item) => item.id === labelId);
  //   return label ? label.name : "";
  // });

  return (
    <div className="bg-zinc-800 p-3 rounded-sm hover:bg-zinc-700">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <h1
          className="font-bold uppercase ml-2 hover:cursor-pointer"
          onClick={() => navigate("/task/" + task.id)}
        >
          {task.title}
        </h1>
      </div>
      <p className="text-slate-400">{task.description}</p>
      {/* <div>
        {translatedLabels.map((label, index) => (
          <span
            key={index}
            className="inline-block rounded-full px-2 py-1 text-white"
            style={{
              // backgroundColor: availableLabels[index].color,
              marginRight: "4px",
            }}
          >
            {label}
          </span>
        ))}
      </div> */}
    </div>
  );
}
