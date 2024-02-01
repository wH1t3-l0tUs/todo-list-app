import {BoxTodoTask} from '@/styles/BoxTodoTask';
import {H1Styled} from "@/styles/CommonElement.ts";
import {LocalStorageTask} from '@/hooks/LocalStorageTask';
import React, {useEffect, useState} from "react";
import {TaskWrapperStyled} from "@/styles/TaskWrapperStyled";
import {TodoTasksList} from "@/components/TodoTasksList";
import {TaskCreateWrapper} from "@/components/TaskCreateWrapper.tsx";
import {v4 as uuid} from 'uuid';
import {Todo} from "@/types";


export const TodoTasks = () => {
    const {TodoTask, setTodoTask} = LocalStorageTask();
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        if (TodoTask.length > 0)
            localStorage.setItem('todos', JSON.stringify(TodoTask));
    }, [TodoTask]);
    const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCreate();
        }
    };
    const handleCreate = () => {
        if (newTask !== '') {
            const todo: Todo = {
                id: uuid().toString(),
                content: newTask,
                status: false,
            };
            setTodoTask((prevTask: Todo[]) => [...prevTask, todo]);
            setNewTask('');
        }
    };

    const handelDelete = (id: string) => {
        setTodoTask((prevTask: Todo[]) =>
            prevTask.filter((todo: Todo) =>
                todo.id !== id
            )
        );
    };

    const handelClearTaskComplete = () => {
        setTodoTask((prevTask: Todo[]) =>
            prevTask.filter((todo: Todo) =>
                !todo.status
            )
        );
    }

    const handleEdit = (id: string, newTask: string, status: boolean) => {
        if (newTask.length === 0) {
            return;
        }

        setTodoTask((prevTask) => prevTask.map((todo) =>
            todo.id === id ? {...todo, content: newTask, status: status} : todo
        ));
    }

    return (
        <BoxTodoTask>
            <H1Styled>Todo List</H1Styled>
            <TaskWrapperStyled>
                <TaskCreateWrapper task={TodoTask} setTodoTask={setTodoTask} newTask={newTask} setNewTask={setNewTask}
                                   handlePressKey={handlePressKey}/>
                <TodoTasksList dataTask={TodoTask} handelDelete={handelDelete} handleEdit={handleEdit}
                               handelClearTaskComplete={handelClearTaskComplete}/>
            </TaskWrapperStyled>
        </BoxTodoTask>
    );
}
