import { useRef } from 'react'
import { useRecoilState } from 'recoil';
import { completeTodoState } from '../store/completeTodoState';
import { incompleteTodoState } from '../store/incompleteTodoState';
import { v4 as uuidv4 } from 'uuid';

export const useOnClick = () => {
  const [incompleteTodo, setIncompleteTodo] = useRecoilState(incompleteTodoState);
  const [completeTodo, setCompleteTodo] = useRecoilState(completeTodoState);
  const todoTextRef = useRef('');

  const handleAdd = () => {
    if (todoTextRef.current.value === '') return;

    const newTodo = {
      id: uuidv4(),
      text: todoTextRef.current.value
    }
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.push(newTodo);
    setIncompleteTodo(newIncompleteTodo);
    todoTextRef.current.value = '';
  }

  const handleDelete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    setIncompleteTodo(newIncompleteTodo);
  }

  const handleComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  }

  const handleBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);
    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  }

  return { handleAdd, todoTextRef, handleDelete, handleComplete, handleBack }
}