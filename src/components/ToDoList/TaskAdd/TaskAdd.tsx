import React, {useCallback, useRef} from 'react';

import Button from "../Button/Button";
import Search from "../Seach/Search";

import {Label, Input, AddDiv, ContainerTaskAdd} from './TaskAdd.style'
import HelpersToDoList from "../helpers";



// type TaskAddPropsType = {
//     onclick: () => void
//     ref: any,
// }

const TaskAdd = () => {

    const {addRef, setVisible, setValueInput, handleAddTask, activeButtonSelect, tooltipRef, handlSearch, selectCategoryAll,
        edit, visible, valueInput, search, setSearch, handeSaveInput, handleOnchange, handleDelete, handleEdit} = HelpersToDoList()

    return (
        <div>
            <AddDiv>
                <Label>
                    <Input type="text" placeholder="Введите название задачи" ref={addRef} />
                </Label>
                <Button title="Add" onClick={handleAddTask} />
            </AddDiv>
        </div>
    );
}

export default React.memo(TaskAdd);