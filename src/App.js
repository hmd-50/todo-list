import './App.css';
import TodoList from './components/TodoList';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { TodosContext } from './context/todosContext';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";




const theme = createTheme({
  typography: {
    fontFamily:["CustomFont1"],
  }
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "1111",
    isCompleted: false,
  },{
    id: uuidv4(),
    title: "كتابة كتاب",
    details: "222",
    isCompleted: false,
  },{
    id: uuidv4(),
    title: "قراءة وكتابة كتاب",
    details: "3333",
    isCompleted: false,
  },
];


function App() {
  const [todos, setTodos]= useState(initialTodos)
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:"flex" , justifyContent:"center", alignItems:"center", height:"100vh" , backgroundColor:"black",direction:"rtl",fontFamily:"CustomFont1" }}>
    <TodosContext.Provider value={{todos, setTodos}}>
    <TodoList/>
    </TodosContext.Provider>
    </div>
    </ThemeProvider>

  );
}

export default App;
