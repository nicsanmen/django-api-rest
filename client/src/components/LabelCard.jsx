import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';

export function LabelCard({ label }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => navigate("/labels/" + label.id)}
        >
            <h1 className="font-bold uppercase">{label.name}</h1>
            <p className="text-slate-400">{"Color: " + label.color}</p>
        </div>
    );
}

