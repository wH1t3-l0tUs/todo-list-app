import {InputStyled} from '@/styles/CommonElement';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Todo} from "@/types";


interface TaskCreateWrapperProps {
    task: Todo[];
    setTodoTask: React.Dispatch<React.SetStateAction<Todo[]>>;
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handlePressKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const TaskCreateWrapper = (props: TaskCreateWrapperProps) => {
    const {task, setTodoTask, newTask, setNewTask, handlePressKey} = props;
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleCheckAll = () => {
        const isAllActive = task.length === task.filter((todo) => todo.status).length;
        const newTasks = task.map((task) => ({
            ...task,
            status: !isAllActive,
        }));
        setTodoTask(newTasks);
    }
    return (
        <InputStyled>
            <FontAwesomeIcon onClick={handleCheckAll} icon={faSortDown} color='#cccccc' size='2x'/>
            <input onChange={(e) => handleOnChange(e)} type="text" placeholder="What needs to be done?"
                   onKeyDown={handlePressKey}
                   value={newTask}/>
        </InputStyled>
    );
}
