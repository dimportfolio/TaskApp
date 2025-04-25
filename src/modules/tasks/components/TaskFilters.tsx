// src/modules/tasks/components/TaskFilters.tsx
import { useTaskContext } from '../../../core/contexts/TaskContext';

const TaskFilters = () => {
    const { filter, setFilter } = useTaskContext();

    const isActive = (val: typeof filter) =>
        val === filter ? { fontWeight: 'bold', textDecoration: 'underline' } : {};

    return (
        <div style={{ margin: '1rem auto', textAlign: 'center' }}>
            <button onClick={() => setFilter('all')} style={isActive('all')}>All</button>{' '}
            <button onClick={() => setFilter('active')} style={isActive('active')}>Active</button>{' '}
            <button onClick={() => setFilter('completed')} style={isActive('completed')}>Completed</button>
        </div>
    );
};

export default TaskFilters;
