import React, {useCallback, useEffect, useRef, useState} from 'react';
import {data} from "../models/todo.model";
import uuid from "react-uuid";

import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import TaskAdd from "../components/TaskAdd";
import Search from "../components/Search";

import styled from "styled-components";
import {log} from "util";

const ContainerTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const DropDownContainer = styled.div`
  right: 78px;
  top: 217px;
  position: absolute;
  cursor: pointer;
  &:hover {
    background-color: olivedrab;
    color: white;
  }
`

const DropDownToggle = styled.div`
  position: absolute;
  background-color: darkgray;

`

const DropDown = styled.div`
  position: relative;
  display: inline-block;
`

const ButtonDropDown = styled.button`
  width: 150px;
  height: 30px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    background-color: olivedrab;
    color: white;
  }

  >* {
    width: 15px;
    height: 15px;
  }
`


const Todo = () => {
    const [task, setTask] = useState(data)
    const [newTask, setNewTask] = useState(data)
    const [visible, setVisible] = useState(false)
    const [taskAdd, setTaskAdd] = useState('')
    const [valueInput, setValueInput] = useState('');
    const [edit, setEdit] = useState<string | boolean | null>(null)
    const [search, setSearch] = useState('')



    useEffect(() => {
        setNewTask(JSON.parse(localStorage.getItem('todos')!))
    }, [])

    const toLocal = () => {
        window.localStorage.setItem('todos', JSON.stringify(newTask))
    }

    const tooltipRef = useRef<HTMLInputElement>(null)

    // клик вне элемента
    useEffect(() => {
        const checkOutside = (e: any) => {
            if(visible && tooltipRef.current && !tooltipRef.current.contains(e.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mouseover", checkOutside)

        return () => {
            document.removeEventListener("mouseout", checkOutside)
        }

    }, [visible])

    // отрисовываем по категориям
    const selectCategory = (status: string | boolean) => {
       if(status === 'all') {
           setNewTask(task)
           setVisible(false)
           toLocal()
       } else {
           let newTodo = [...task].filter(item => item.completed === status)
           setNewTask(newTodo)
           setVisible(false)
           toLocal()
       }
    }

// добавляем task
    const handleAddTask = () => {
        if(taskAdd) {
            setNewTask([{
                id: uuid(),
                title: taskAdd,
                completed: false
            }, ...newTask])
            toLocal()
            setTaskAdd('')

        }
    }
// редактирование
    const handleEdit = (id: string, title: string) => {
        setEdit(id)
        setValueInput(title)
        toLocal()
    }

//  удаляем task
    const handleDelete = useCallback((id: string) => {
        setNewTask(newTask.filter(task => task.id !== id))
    },[newTask])

        // меняем флаг на противоположный
    const handleOnchange =  useCallback((id: string) => {
        setNewTask(newTask.filter((elem) => {
            if(elem.id === id) {
                elem.completed = !elem.completed
            }
            return newTask
        }))
    }, [newTask])

//сохранить редактирование
    const handeSaveInput = (id: string) => {
        setNewTask(newTask.map(item => {
            if(item.id === id) {
                item.title = valueInput
            }
            return item
        }))
        setEdit(null)
    }
// фильтр
   const handlSearch = newTask.filter(todo => {
       return todo.title.toLowerCase().includes(search)
   })


    return (
        <ContainerTodo>
            <h1>TODO-LIST</h1>

            <TaskAdd onClick={handleAddTask}
                     value={taskAdd}
                     onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTaskAdd(e.target.value)}
            >
                <Search search={search} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}  />
            </TaskAdd>

            <DropDownContainer>
                <DropDown className="btn-group" role="group">
                    <ButtonDropDown  type="button" onClick={() => selectCategory('all')} onMouseEnter={() => setVisible(!visible)} >
                        Show All Tasks
                        {visible ? (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.54163 10.02L8.88538 13.23L10.927 15.2C11.7916 16.03 13.1979 16.03 14.0625 15.2L19.4583 10.02C20.1666 9.34001 19.6562 8.18001 18.6666 8.18001L12.8229 8.18001L6.3333 8.18001C5.3333 8.18001 4.8333 9.34001 5.54163 10.02Z" fill="#070707"/>
                        </svg>) : (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4579 13.9799L16.1142 10.7699L14.0725 8.7999C13.2079 7.9699 11.8017 7.9699 10.9371 8.7999L5.54127 13.9799C4.83294 14.6599 5.34336 15.8199 6.33294 15.8199H12.1767H18.6663C19.6663 15.8199 20.1663 14.6599 19.4579 13.9799Z" fill="#070707"/>
                        </svg>)
                        }
                    </ButtonDropDown>

                    {visible ? (<DropDownToggle ref={tooltipRef} className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <ButtonDropDown className="dropdown-item"  onClick={() => selectCategory(true)} >Show Active Tasks</ButtonDropDown>
                        <ButtonDropDown className="dropdown-item"  onClick={() => selectCategory(false)}>Show completed Tasks</ButtonDropDown>
                    </DropDownToggle>) : ('')
                    }
                </DropDown>
            </DropDownContainer>
            <p>Количество задач: {newTask.length}</p>

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

    );
}

export default Todo;