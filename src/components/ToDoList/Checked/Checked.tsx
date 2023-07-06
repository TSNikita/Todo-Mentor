import React from 'react';
import PropTypes from 'prop-types';
import {CheckboxContainer} from "../ToDoItem/ToDoItem.Style";

interface CheckedPropsType {
    checked: boolean,
    checkedOnClick: () => void
}


const Checked: React.FC<CheckedPropsType> = ({checked, checkedOnClick}) => {
    return (

            <CheckboxContainer>
                <input type='checkbox' checked={checked} onChange={checkedOnClick}/>
                {checked && <div>Выполнено</div> }
            </CheckboxContainer>

    );
}

export default Checked;