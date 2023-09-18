import React from 'react'
import { useOnClick } from '../hooks/onClick';

const InputTodo = () => {
  const { handleAdd, todoTextRef } = useOnClick();

  return (
    <div className="input-area">
      <input placeholder='TODOを入力' ref={todoTextRef} />
      <button onClick={handleAdd}>追加</button>
    </div>
  )
}

export default InputTodo