import React from 'react'
import { useRecoilState } from 'recoil';
import { todoTextState } from '../store/todoTextState';
import { useOnClick } from '../hooks/onClick';

const InputTodo = () => {
  const [todoText, setTodoText] = useRecoilState(todoTextState);
  const { handleAdd } = useOnClick();
  const todoChange = (e) => setTodoText(e.target.value);

  return (
    <div className="input-area">
      <input placeholder='TODOを入力' onChange={todoChange} value={todoText} />
      <button onClick={handleAdd}>追加</button>
    </div>
  )
}

export default InputTodo