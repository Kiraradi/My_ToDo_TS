import React from 'react'
import styled from "styled-components";
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { editTask } from '../../store/todoSlise';
import CustomInput from '../CustomInput/CustomInput';
import { typeTask } from '../../types';

interface IEditTask {
    task: typeTask
    toggleEdit: () => void
}

const EditTask:React.FC<IEditTask> = (props) => {
    const [taskText, setTaskText] = React.useState(props.task.text);
    const dispatch = useAppDispatch();

    const handleChange = (event:React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setTaskText(event.currentTarget.value);
    }

    const handleEdit = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!taskText.trim()) {
            return;
        }

        dispatch(editTask(
            {
                newText: taskText,
                id: props.task.id
            }
        ));
        props.toggleEdit();
    }
    return (
        <StyledEditTask>
            <CustomInput className='edit_input' value={taskText} onChange={handleChange}/>
            <button className='button_edit_task' onClick={handleEdit}></button>
            <button className='button_close_edit' onClick={props.toggleEdit}></button>
        </StyledEditTask>
    )
}

export default EditTask;

const StyledEditTask = styled.div`
    display: flex; 
    align-items: center;
    width: 100%;
    gap: 20px;
    .edit_input {
        width: 100%;
        height: 30px;
        padding-left: 25px;
        border-radius: 5px;
    }

    .button_close_edit {
        width: 30px;
        height: 30px;    
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: center;
        cursor: pointer;
        border: none;
        background-color: ${({theme}) => theme.colors.white};
        background-image: url('/icons/close_image.svg');
    }

    .button_edit_task {
        width: 30px;
        height: 30px;    
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: center;
        cursor: pointer;
        border: none;
        background-color: ${({theme}) => theme.colors.white};
        background-image: url('/icons/icon-check-black.svg');
    }
`
