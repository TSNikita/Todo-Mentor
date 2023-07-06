import React from 'react';

import {ButtonDropDown, DropDown, DropDownContainer, DropDownToggle, ContainerTodo, ContainerTaskAdd, Input, AddDiv, Label} from "./ToDoList.style";
import TodoItem from "./ToDoItem/ToDoItem";
import Button from "./Button/Button";
import Search from "./Seach/Search";
import HelpersToDoList from "./helpers";


const ToDoListContainer = () => {
    const {addRef, setVisible, setValueInput, handleAddTask, activeButtonSelect, tooltipRef, handlSearch, selectCategoryAll,
         edit, visible, valueInput, search, setSearch, handeSaveInput, handleOnchange, handleDelete, handleEdit} = HelpersToDoList()

   return (
           <ContainerTodo>
               <h1>TODO-LIST</h1>
               <ContainerTaskAdd >
                   <AddDiv>
                       <Label>
                           <Input type="text" placeholder="Введите название задачи" ref={addRef} />
                       </Label>
                       <Button title="Add" onClick={handleAddTask} />
                   </AddDiv>
                   <Search search={search} onChangeSearch={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
               </ContainerTaskAdd>
               <DropDownContainer>
                   <DropDown className="btn-group" role="group" onClick={() => setVisible(true)} >
                       <ButtonDropDown type="button">
                           {visible ? (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M5.54163 10.02L8.88538 13.23L10.927 15.2C11.7916 16.03 13.1979 16.03 14.0625 15.2L19.4583 10.02C20.1666 9.34001 19.6562 8.18001 18.6666 8.18001L12.8229 8.18001L6.3333 8.18001C5.3333 8.18001 4.8333 9.34001 5.54163 10.02Z" fill="#070707"/>
                           </svg>) : (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M19.4579 13.9799L16.1142 10.7699L14.0725 8.7999C13.2079 7.9699 11.8017 7.9699 10.9371 8.7999L5.54127 13.9799C4.83294 14.6599 5.34336 15.8199 6.33294 15.8199H12.1767H18.6663C19.6663 15.8199 20.1663 14.6599 19.4579 13.9799Z" fill="#070707"/>
                           </svg>)
                           }
                           {activeButtonSelect}
                       </ButtonDropDown>
                       {visible ? (<DropDownToggle ref={tooltipRef}>
                           <ButtonDropDown  type="button" onClick={() => selectCategoryAll('all')} >Show All Tasks</ButtonDropDown>
                           <ButtonDropDown type='button'  onClick={() => selectCategoryAll(true)} >Show Active Tasks</ButtonDropDown>
                           <ButtonDropDown type='button'  onClick={() => selectCategoryAll(false)}>Show completed Tasks</ButtonDropDown>
                       </DropDownToggle>) : ('')
                       }
                   </DropDown>
               </DropDownContainer>
               <p>Количество задач: {handlSearch.length}</p>
               {handlSearch.map((item) => (
                   <TodoItem title={item.title}
                             key={item.id}
                             checked={item.completed}
                             id={item.id}
                             checkedOnClick={() => handleOnchange(item.id)}
                             value={item.title}
                             valueSave={valueInput}
                             onChangeInputSave={(e: React.ChangeEvent<HTMLInputElement>) => setValueInput(e.target.value)}
                             handeSaveInput={() => handeSaveInput(item.id)}
                             edit={edit}
                   >
                       <Button title='Edit' onClick={() => handleEdit(item.id, item.title)} />
                       <Button title='Delete' onClick={() => handleDelete(item.id)} />
                   </TodoItem>
               ))}
           </ContainerTodo>
       )
}


export default ToDoListContainer;