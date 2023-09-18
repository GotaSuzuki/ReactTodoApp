import React from 'react'
import { useRecoilValue } from 'recoil';
import { completeTodoNumState, completeTodoState } from '../store/completeTodoState';
import { useOnClick } from '../hooks/onClick';

const CompleteTodo = () => {
  const completeTodo = useRecoilValue(completeTodoState);
  const completeTotalNum = useRecoilValue(completeTodoNumState);
  const { handleBack } = useOnClick();

  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      <p style={{ textAlign: 'center' }}>残りの数：<span style={{ color: 'red' }}>{completeTotalNum}</span></p>
      {completeTodo.map((todo, index) => (
        <ul key={todo.id}>
          <div className="list-row">
            <li>{todo.text}</li>
            <button onClick={() => { handleBack(index) }}>戻す</button>
          </div>
        </ul>
      ))}
    </div>
  )
}

export default CompleteTodo