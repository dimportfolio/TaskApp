// src/pages/Dashboard.tsx
import TaskFilters from '../modules/tasks/components/TaskFilters';
import TaskList from '../modules/tasks/components/TaskList';

const Dashboard = () => {
    return (
        <>
            <h1>TaskZen Dashboard</h1>
            <TaskFilters />
            <TaskList />
        </>
    );
};

export default Dashboard;
