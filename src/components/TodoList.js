import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";







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

export default function TodoList() {
  const [alignment, setAlignment] = React.useState("الكل");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
const [todos, setTodos]= useState(initialTodos)
const [titleInput,setTitleInput] = useState("");

function phandleCheckClick(todoId) {
    const updateTodo = todos.map((t)=> {
      if(t.id == todoId){
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodo);
}

  const todosmap = todos.map((t)=>{
    return  <Todo key={t.id}  TodoPrm={t} handleCheck={phandleCheckClick}/>
  });

 function handleAddClick() {
  const newTodo = {
    id: uuidv4(),
    title:titleInput,
    details:"",
    isCompleted:false
  };
  setTodos([...todos,newTodo]);
  setTitleInput("");
 }
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h3"
            component="div"
            style={{ fontWeight: "800" }}
          >
            مهامي
          </Typography>
          <Divider />
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "10px" }}
            color="primary"
            // value={alignment}
            exclusive
            // onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="ios">غير منجز</ToggleButton>
            <ToggleButton value="android">منجز</ToggleButton>
            <ToggleButton value="الكل">الكل</ToggleButton>
         </ToggleButtonGroup>
{todosmap}    
    </CardContent>
        <>
          <Grid container spacing={2}>
            <Grid
              sx={{
                textAlign: "right",
                backgroundColor: "#eceff1",
                marginBottom: 2,
                marginRight: 2,
              }}
              size={8}
            >
              <TextField
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                style={{ width: "100%" }}
                value={titleInput}
                onChange={(e)=> {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>

            <Grid sx={{ textAlign: "right" }} size={3}>
              <Button
                className="endButton"
                variant="outlined"
              //  onClick={() => {
                //  function handleAddClick(); }}
                onClick={handleAddClick}
                sx={{
                  padding: 1.9,
                  paddingRight: 7,
                  paddingLeft: 7,
                  marginRight: 1,
                  backgroundColor: "#b71c1c",
                  color: "white",
                  borderColor: "blck",
                  width: "100%",
                }}
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
        </>
      </Card>
    </Container>
  );
}
