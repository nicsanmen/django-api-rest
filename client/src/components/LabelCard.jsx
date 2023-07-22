import { useNavigate } from "react-router-dom";

export function LabelCard({ label }) {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: label.color,
  };

  return (
    <div
      className="bg-zinc-800 p-3 rounded-sm hover:bg-zinc-700 hover:cursor-pointer"
      style={cardStyle}
      onClick={() => navigate("/labels/" + label.id)}
    >
      <h1 className="font-bold uppercase">{label.name}</h1>
      <p className="text-slate-400">{label.color}</p>
    </div>
  );
}
