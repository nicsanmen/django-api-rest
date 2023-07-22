import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createLabel, updateLabel, getLabel, deleteLabel } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function LabelFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateLabel(params.id, data);
      toast.success("Label updated");
    } else {
      await createLabel(data);
      toast.success("New label added");
    }
    navigate("/labels");
  });

  useEffect(() => {
    async function loadLabel() {
      if (params.id) {
        const { data } = await getLabel(params.id);
        setValue("name", data.name);
        setValue("color", data.color);
      }
    }
    loadLabel();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.name && <span>Name is required</span>}
        <select
          {...register("color", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        >
          <option value="">Select color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="brown">Brown</option>
        </select>
        {errors.color && <span>Color is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg block w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm(
                "Are you sure you wish to delete this item?"
              );
              if (accepted) {
                await deleteLabel(params.id);
                toast.success("Label deleted");
                navigate("/labels");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
