import { useState, useEffect } from 'react';
import { Todo } from '@/types';

export const LocalStorageTask = () => {
    const [TodoTask, setTodoTask] = useState<Todo[]>([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            try {
                const parsedTodos = JSON.parse(savedTodos);
                if (Array.isArray(parsedTodos)) {
                    setTodoTask(parsedTodos);
                }
            } catch (error) {
                console.error('Parsing todos from local storage failed', error);
            }
        }
    }, []);

    return { TodoTask, setTodoTask };
};
