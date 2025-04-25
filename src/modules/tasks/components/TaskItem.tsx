// src/modules/tasks/components/TaskItem.tsx
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../state/taskSlice';

interface TaskItemProps {
    id: string;
    title: string;
    completed: boolean;
}

const TaskItem = ({ id, title, completed }: TaskItemProps) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(id));
    };

    return (
        <div
            onClick={handleToggle}
            style={{
                cursor: 'pointer',
                textDecoration: completed ? 'line-through' : 'none',
                padding: '0.5rem',
                borderBottom: '1px solid #ccc',
            }}
            aria-label={`Toggle task: ${title}`}
        >
            ✅ {title}
        </div>
    );
};

export default memo(TaskItem); // Performance boost
