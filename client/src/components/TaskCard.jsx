
export function TaskCard({task}) {
  return (
    <div>
          <b>{'Título: ' + task.title}</b>
          <p>{'Descripción: '+ task.description}</p>
          <hr/>
    </div>
  )
} 