import { useRecoilState } from 'recoil';
import { completeTodoState } from '../store/completeTodoState';
import { incompleteTodoState } from '../store/incompleteTodoState';
import { todoTextState } from '../store/todoTextState';
import { v4 as uuidv4 } from 'uuid';

export const useOnClick = () => {
  const [incompleteTodo, setIncompleteTodo] = useRecoilState(incompleteTodoState);
  const [completeTodo, setCompleteTodo] = useRecoilState(completeTodoState);
  const [todoText, setTodoText] = useRecoilState(todoTextState);

  const handleAdd = () => {
    if (todoText === '') return;

    const newTodo = {
      id: uuidv4(),
      text: todoText
    }
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.push(newTodo);
    setIncompleteTodo(newIncompleteTodo);
    setTodoText('');
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

  return { handleAdd, handleDelete, handleComplete, handleBack }
}