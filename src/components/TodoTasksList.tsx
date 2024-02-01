import {BrowserRouter as RouterWrapper, Route, Routes} from "react-router-dom";
import {Todo} from "@/types";
import {TaskItem} from "@/components/TaskItem.tsx";
import {FooterTask} from "@/components/FooterTask.tsx";

interface TodoTasksListProps {
    dataTask: Todo[];
    handelDelete: (taskId: string) => void;
    handleEdit: (taskId: string, newTask: string, status: boolean) => void;
    handelClearTaskComplete: () => void;
}

export const TodoTasksList = (props: TodoTasksListProps) => {
    const {dataTask, handelDelete, handleEdit, handelClearTaskComplete} = props;

    const AllTodoComponent = () => {
        return <>
            {dataTask.map((item) => (
                <TaskItem key={item.id} task={item} handelDelete={handelDelete} handleEdit={handleEdit} />
            ))}
        </>;
    };
    const ActiveTodoComponent = () => {
        return <>
            {dataTask.filter((item) => !item.status).map((item) => (
                <TaskItem key={item.id} task={item} handelDelete={handelDelete} handleEdit={handleEdit} />
            ))}
        </>;
    }

    const CompleteTodoComponent = () => {
        return <>
            {dataTask.filter((item) => item.status).map((item) => (
                <TaskItem key={item.id} task={item} handelDelete={handelDelete} handleEdit={handleEdit} />
            ))}
        </>;
    }

    return (
        <RouterWrapper>
            <Routes>
                <Route path="/" Component={AllTodoComponent}/>
                <Route path="/active" Component={ActiveTodoComponent}/>
                <Route path="/complete" Component={CompleteTodoComponent}/>
            </Routes>
            <FooterTask dataTask={dataTask} handelClearTaskComplete={handelClearTaskComplete} />
        </RouterWrapper>
    );
}
