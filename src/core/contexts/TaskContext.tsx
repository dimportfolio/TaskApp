import { createContext, useContext, useState, ReactNode } from 'react';

type Filter = 'all' | 'active' | 'completed';

interface TaskContextType {
    filter: Filter;
    setFilter: (f: Filter) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<Filter>('all');

    return (
        <TaskContext.Provider value={{ filter, setFilter }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const ctx = useContext(TaskContext);
    if (!ctx) throw new Error('useTaskContext must be used within TaskProvider');
    return ctx;
};
