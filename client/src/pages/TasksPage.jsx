import { TaskList } from '../components/TaskList'
import { LabelList } from '../components/LabelList'

export function TasksPage() {
    return (
        <div className=''>
            <div className="flex justify-between items-center p-3">
                <h1 className="text-3xl font-bold">Tasks</h1>
            </div>
            <TaskList />
            <div className="flex justify-between items-center p-3">
                <h1 className="text-3xl font-bold">Labels</h1>
            </div>
            <LabelList />
        </div>
    )
}