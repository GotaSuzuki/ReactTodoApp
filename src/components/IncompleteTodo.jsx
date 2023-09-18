import { useRecoilValue } from 'recoil';
import { incompleteTodoNumState, incompleteTodoState } from '../store/incompleteTodoState';
import { useOnClick } from '../hooks/onClick';

const IncompleteTodo = () => {
  const incompleteTodo = useRecoilValue(incompleteTodoState);
  const incompleteTotalNum = useRecoilValue(incompleteTodoNumState);
  const { handleDelete, handleComplete } = useOnClick();

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <p style={{ textAlign: 'center' }}>残りの数：<span style={{ color: 'red' }}>{incompleteTotalNum}</span></p>
      {incompleteTodo.map((todo, index) => (
        <ul key={todo.id}>
          <div className="list-row">
            <li>{todo.text}</li>
            <button onClick={() => { handleComplete(index) }}>完了</button>
            <button onClick={() => { handleDelete(index) }}>削除</button>
          </div>
        </ul>
      ))}
    </div>
  )
}

export default IncompleteTodo