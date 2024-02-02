import {Todo} from "@/types";
import {TaskItemStyled} from "@/styles/TaskItemStyled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {BoxStyled} from "@/styles/BoxStyled.ts";

interface TaskItemProps {
    task: Todo;
    handelDelete: (taskId: string) => void;
    handleEdit: (taskId: string, newTask: string, status: boolean) => void;
}

export const TaskItem = (props: TaskItemProps) => {
    const {task, handelDelete, handleEdit} = props;
    const [actionEdit, setActionEdit] = useState(false);
    const [newContent, setNewContent] = useState(task.content);
    const handleBlur = () => {
        setActionEdit(false);
    }
    const handlePressKeyEdit = (e: React.KeyboardEvent<HTMLInputElement>, taskId: string) => {
        if (e.key === 'Enter') {
            handleEdit(taskId, newContent, task.status);
        }
    };
    return (
        <TaskItemStyled status={!task.status} isEdit={actionEdit}>
            {!actionEdit ?
                <BoxStyled className='preview' onDoubleClick={() => {
                    setActionEdit(true);
                }}>
                    <FontAwesomeIcon onClick={() => {
                        handleEdit(task.id, task.content, !task.status);
                    }} icon={faCircleCheck} color={task.status ? '#007bff' : 'gray'}/>
                    <p>{task.content}</p>
                    <FontAwesomeIcon className='close' icon={faXmark} onClick={() => handelDelete(task.id)}/>
                </BoxStyled> :
                <BoxStyled className='edit'>
                    <input type="text"
                           onKeyDown={(e) => {
                               handlePressKeyEdit(e, task.id);
                           }}
                           onChange={(e) => {
                               setNewContent(e.target.value)
                           }}
                           value={newContent}
                           onBlur={handleBlur}
                           autoFocus
                    />
                </BoxStyled>
            }

        </TaskItemStyled>
    );
}
