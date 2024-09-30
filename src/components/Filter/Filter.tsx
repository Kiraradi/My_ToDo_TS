import styled from "styled-components";

import { filterData } from "./filterData";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { changeCurrentFilter } from "../../store/todoSlise";
import CustomButton from "../../UI/CustomButton/CustomButton";
import React from "react";

const Filter: React.FC = () => {
  const currentFilter = useAppSelector(state => state.todo.currentFilter);

  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    if (currentFilter === id) {
      return;
    }

    dispatch(changeCurrentFilter(id));
  }
  
  return (
    <StyledFilterContainer>
      {
        filterData.map((button) => {
          return <CustomButton
            key={button.id}
            text={button.text}
            isActive={button.id === currentFilter}
            onClick={() => handleClick(button.id)}
          />
        })
      }
    </StyledFilterContainer>
  );
}


export default Filter;

const StyledFilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
