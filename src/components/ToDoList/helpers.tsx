import React, {useCallback, useEffect, useRef, useState} from 'react';

import {data} from "../../models/todo.model";
import uuid from "react-uuid";

const HelpersToDoList = () => {
    const [task, setTask] = useState(data)
    const [newTask, setNewTask] = useState(task)
    const [visible, setVisible] = useState<boolean>(false)
    const [taskAdd, setTaskAdd] = useState<string>('')
    const [valueInput, setValueInput] = useState<string>('');
    const [edit, setEdit] = useState<string | boolean | null>(null)
    const [search, setSearch] = useState<string>('')
    const [activeButtonSelect, setActiveButtonSelect] = useState('Category')

    const addRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        setNewTask(JSON.parse(localStorage.getItem('todos')!))
    }, [])


    const toLocal = () => {
        window.localStorage.setItem('todos', JSON.stringify(newTask))
    }

    const tooltipRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const checkOutside = (e: MouseEvent) => {
            // @ts-ignore
            if(visible && tooltipRef.current && !tooltipRef.current.contains(e.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mouseover", checkOutside)
        return () => {
            document.removeEventListener("mouseover", checkOutside)
        }
    }, [visible])

    const selectCategoryAll = (status: string | boolean) => {
        if (status === 'all') {
            setVisible(false)
            setActiveButtonSelect('Show All Tasks')
            setNewTask(JSON.parse(localStorage.getItem('todos')!))
        } else {
            const tas = JSON.parse(localStorage.getItem('todos')!)
            setActiveButtonSelect(status ? 'Show Active Tasks' : 'Show Completed Tasks')
            let newTodo = tas.filter((item: { completed: boolean; }) => item.completed === status)
            setNewTask(newTodo)
            setVisible(false)
        }
    }

    const handleAddTask = () => {
        if(addRef.current) {
            const inputRef = addRef.current.value
            setNewTask([{
                id: uuid(),
                title: inputRef,
                completed: false
            }, ...newTask])
            addRef.current.value = ''
            toLocal()
        }

    }

    const handleEdit = useCallback((id: string, title: string) => {
        setEdit(id)
        setValueInput(title)
    },[edit])

    const handleDelete = useCallback((id: string) => {
        setNewTask(newTask.filter(task => task.id !== id))
    },[newTask])

    const handleOnchange = (id: string) => {
        setNewTask(newTask.filter((elem) => {
            if(elem.id === id) {
                elem.completed = !elem.completed
                toLocal()
            }
            return newTask
        }))

    }

    const handeSaveInput = (id: string) => {
        setNewTask(newTask.map(item => {
            if(item.id === id) {
                item.title = valueInput
            }
            return item
        }))
        setEdit(null)
    }

    const handlSearch =  newTask.filter(todo => {
        return todo.title.toLowerCase().includes(search)
    })

    return {addRef, setTaskAdd, setVisible, setValueInput, handleAddTask, activeButtonSelect, tooltipRef, handlSearch, selectCategoryAll, setTask, setNewTask, newTask, edit, setEdit, visible, taskAdd, valueInput, search, setSearch, handeSaveInput, handleOnchange, handleDelete, handleEdit}
}

export default HelpersToDoList;