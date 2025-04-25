import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store/store';
import { useTaskContext } from '../../../core/contexts/TaskContext';
import TaskItem from './TaskItem';
import { useMemo } from 'react';

const TaskList = () => {
    const { filter } = useTaskContext();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        });
    }, [tasks, filter]);

    if (!filteredTasks.length) return <p>No tasks found.</p>;

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '1rem' }}>
            {filteredTasks.map(task => (
                <TaskItem key={task.id} {...task} />
            ))}
        </div>
    );
};

export default TaskList;
