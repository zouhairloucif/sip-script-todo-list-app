import React, { useState } from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import TodoList, { Todo } from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import Toast from './components/Toast/Toast';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState<string>('light');
  const [toastMessage, setToastMessage] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <ThemeContext.Provider value={theme} >
      <Container fluid className='px-0' data-bs-theme={theme}>
        <Toast toastMessage={toastMessage}></Toast>
        <AppHeader setTheme={setTheme} />
        <Container className='py-4'>
          <TodoList todos={todos} setTodos={setTodos} showToast={setToastMessage} />
        </Container>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
