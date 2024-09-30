import React from 'react';
import styled from 'styled-components';

interface ICustomButton {
    isActive: boolean
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => void
    text: string
}

const CustomButton:React.FC<ICustomButton> = (props) => (
    <StyledButtonContainer isActive={props.isActive} >
        <button
            className='button'
            onClick={props.onClick}
        >
            {props.text}
        </button>
    </StyledButtonContainer>
)

export default CustomButton;

const StyledButtonContainer = styled.div<{isActive: boolean}> `
    display: flex;
    width: 100%;
    max-width: 150px;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    .button {
        width: 100%;                
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({isActive, theme}) =>  isActive ? theme.colors.red : theme.colors.white};
        cursor: pointer;
        font-weight: 600;
        border: 2px solid ${({theme}) => theme.colors.black};
        border-radius: 5px;
        font-size: unset;
        text-transform: uppercase;
    }

    @media(max-width: 550px) {
        font-size: ${({theme}) => theme.f_size.b_des};
        max-width: 100px;
    }

    @media(max-width: 380px) {
        font-size: ${({theme}) => theme.f_size.b_mob};
        max-width: 80px;
    }
`