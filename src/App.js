import React from "react";
import { Container, Grid } from "@material-ui/core";
import Pomodoro from "./pages/pomodoro/Pomodoro";

import "./App.css";
import TodoList from "./pages/Todo/TodoList";

function App() {
  return (
    <Container className={"top_margin"}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={3} className="todo-app">
          <TodoList />
        </Grid>
        <div className="main_content container_shadow">
          <Grid item xs>
            <Pomodoro />
          </Grid>
        </div>
      </Grid>
    </Container>
  );
}

export default App;
