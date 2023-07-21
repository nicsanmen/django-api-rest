import {useForm} from 'react-hook-form'
import { createTask } from '../api/task.api'
import { redirect } from 'react-router-dom';

export function TaskFormPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const onSubmit = handleSubmit(async data => {
    const res = await createTask(data);
    console.log(res);
  });    

    return (
      <div>

        <form onSubmit={onSubmit}>
          <input type="text" placeholder="title"
            {...register("title", {required: true})}
          />
          {errors.title && <span>Title is required</span>}
          <textarea rows="3" placeholder="description"
            {...register("description", {required: true})}
          />
          {errors.description && <span>Description is required</span>}
          <button>Save</button>
        </form>

      </div>
    )
  }