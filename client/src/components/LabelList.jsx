import { useEffect, useState } from "react";
import { getAllLabels } from "../api/task.api";
import { LabelCard } from "./LabelCard";

export function LabelList() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    async function loadLabels() {
      const res = await getAllLabels();
      setLabels(res.data);
    }
    loadLabels();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {labels.map((label) => (
        <LabelCard key={label.id} label={label} />
      ))}
    </div>
  );
}

export default LabelList;
