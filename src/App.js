import './App.css';
import TodoList from './components/TodoList';
import { createTheme , ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily:["CustomFont1"],
  }
});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:"flex" , justifyContent:"center", alignItems:"center", height:"100vh" , backgroundColor:"black",direction:"rtl",fontFamily:"CustomFont1" }}>
    <TodoList/>
    </div>
    </ThemeProvider>

  );
}

export default App;
