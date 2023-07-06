import React from 'react';

import {ContainerTodo, ContainerEditBlock, ContainerBtn, InputEdit, ButtonEdit, TitleStyle} from './ToDoItem.Style'
import Checked from "../Checked/Checked";

type TodoItemPropsType = {
    title: string,
    checkedOnClick: () => void,
    checked: boolean
    id: string,
    children: React.ReactNode,
    value: string,
    onChangeInputSave: (event: React.ChangeEvent<HTMLInputElement>) => void,
    valueSave: string,
    handeSaveInput: () => void,
    edit: null | string | boolean
}

const ToDoItem = ({title, id, children, checked, checkedOnClick, onChangeInputSave, valueSave, handeSaveInput, edit}: TodoItemPropsType) => {
    return (
        <ContainerTodo>
            <div>
                {edit === id ? (
                    <ContainerEditBlock>
                        <InputEdit type="text" value={valueSave} onChange={onChangeInputSave} />
                        <ButtonEdit onClick={handeSaveInput} >Save</ButtonEdit>
                    </ContainerEditBlock>) :

                    (<TitleStyle id={id}>{title}</TitleStyle>)
                }
                <Checked checked={checked} checkedOnClick={checkedOnClick} />
            </div>
                <ContainerBtn>
                    {children}
                </ContainerBtn>
        </ContainerTodo>
    );
}

export default React.memo(ToDoItem);