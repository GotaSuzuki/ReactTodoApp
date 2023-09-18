import './App.css';
import InputTodo from './components/InputTodo';
import CompleteTodo from './components/CompleteTodo';
import IncompleteTodo from './components/IncompleteTodo';


function App() {
  return (
    <div className="App">
      <InputTodo />
      <IncompleteTodo />
      <CompleteTodo />
    </div>
  );
}

export default App;
