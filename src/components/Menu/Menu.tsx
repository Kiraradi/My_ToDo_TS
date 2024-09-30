import styled from 'styled-components';
import TodoForm from "../TodoForm/TodoForm";

import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { toggleStatusAllTasks } from "../../store/todoSlise";
import { itemsLeft } from "../../store/todoSelectors";

const Menu = () => {
    const dispatch = useAppDispatch();

    const activeTasksCounter = useAppSelector(itemsLeft);

    const handleToggleStatusAllTasks = () => {
        const newStatus = !!activeTasksCounter;
        dispatch(toggleStatusAllTasks(newStatus));
    }
    return (
        <StyledMenu>
            <button
                className="button_toggle_all"
                onClick={handleToggleStatusAllTasks}
            ></button>
            <TodoForm />
        </StyledMenu>
    )
}

export default Menu;


const StyledMenu = styled.div`
        display: flex;
        width: 100%;
        gap: 10px;
        align-items: center;

        .button_toggle_all {
            width: 30px;
            height: 30px;
            border: none;
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.white};
            background-image: url('/icons/check_all_icon.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 25px;
        }
`