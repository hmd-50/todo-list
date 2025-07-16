import * as React from "react";
import Card from "@mui/material/Card";
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
import { useState, useEffect, useContext } from "react";
import { TodosContext } from "../context/todosContext";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setdisplayedTodosType] = useState("all");

  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });

  const notcompletedTodos = todos.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRendered = todos;

  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notcompletedTodos;
  } else {
    todosToBeRendered = todos;
  }
  const todosmap =
    todosToBeRendered && todosToBeRendered.length > 0 ? (
      todosToBeRendered.map((t) => {
        return <Todo key={t.id} TodoPrm={t} />;
      })
    ) : (
      <Typography style={{ textAlign: "center", marginTop: "20px" }}>
        لا توجد مهام لديك
      </Typography>
    );

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todosStorage"));
    setTodos(storageTodos);
  }, []);

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos([...todos, newTodo]);
    localStorage.setItem("todosStorage", JSON.stringify(updatedTodos));
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
            value={displayedTodosType}
            exclusive
            onChange={(event, newValue) => setdisplayedTodosType(newValue)}
            aria-label="Platform"
          >
            <ToggleButton value="non-completed">غير منجز</ToggleButton>
            <ToggleButton value="completed">منجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
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
                onChange={(e) => {
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
