// src/modules/tasks/components/__tests__/TaskItem.test.tsx
import { render, screen } from '@testing-library/react';
import TaskItem from '../TaskItem';
import { Provider } from 'react-redux';
import { store } from '../../../../core/store/store';

describe('TaskItem', () => {
    it('renders task title', () => {
        render(
            <Provider store={store}>
                <TaskItem id="1" title="Test Task" completed={false} />
            </Provider>
        );
        expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
    });
});
