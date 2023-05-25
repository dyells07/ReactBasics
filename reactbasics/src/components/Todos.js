import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h3 className="my-3 text-center">Todos List</h3>
        {/* <TodoItem todo={props.todos[1]}/> This is how we pass props to a component */}
        {props.todos.length === 0 ? "You Finished all the works well done" : ""}
        {props.todos.map((todo) => {
          // This is how we iterate over an array of objects
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />{" "}
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};
