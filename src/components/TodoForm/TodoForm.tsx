import React from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { createNewTask } from "../../services";
import { addTasks } from "../../store/todoSlise";
import CustomInput from "../CustomInput/CustomInput";

const TodoForm = () => {
    const [taskText, setTaskText] = React.useState('');
    const dispatch = useAppDispatch();

    const handelChangeTask = (event:React.FormEvent<HTMLInputElement>) => {
        setTaskText(event.currentTarget.value);
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!taskText.trim()) {
            return;
        }
        const newTask = createNewTask(taskText);
        dispatch(addTasks(newTask))
        setTaskText('');
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <CustomInput onChange={handelChangeTask} value={taskText} className='todo_input' placeholder="Что нужно сделать?"/>
        </StyledForm>
    )
}

export default TodoForm;

const StyledForm = styled.form`
    width: 100%;

    .todo_input {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border-radius: 5px;
    }

    .todo_input:focus {
        outline: none;
        border: 3px solid ${({ theme }) => theme.colors.red};
    }
`
