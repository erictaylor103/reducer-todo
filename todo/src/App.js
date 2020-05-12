import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
