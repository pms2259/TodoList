import React, {useState} from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { MdAddCircle  } from "react-icons/md";

let nextId = 4;

const App = () => {

  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ])

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  }

  const onIsertTodo = (text) => {
    if (text === "") {
      return alert('할 일을 입력해주세요.')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
    }
  }
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} />}
    </Template>
  )
}

export default App;
