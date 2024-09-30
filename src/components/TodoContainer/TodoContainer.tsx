import React from "react";
import styled from "styled-components";

import TasksList from "../TasksList/TasksList";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../store/hooks/useAppSelector";

const TodoContainer: React.FC = () => {
    const tasksList = useAppSelector(state => state.todo.tasksList);
    return (
        <StyledTodoContainer>
            {tasksList.length > 0 && (
                <>
                    <Filter />
                    <TasksList />
                    <Footer />
                </>

            )}
        </StyledTodoContainer>
    )
}

export default TodoContainer;


const StyledTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
`