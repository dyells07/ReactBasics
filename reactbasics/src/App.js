// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import AddTodo from "./components/AddTodo";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; //This is how we import react router
import { About } from "./components/About";
import { Switch } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    // let index = todos.indexOf(todo);   // This will not work because indexOf() method returns -1 if the element is not found
    // todos.splice(index, 1);  //react does not allow direct manipulation of state and work like this

    setTodos(
      todos.filter((e) => {
        // This is how we delete a todo
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // const addTodo = (title, desc) => {
  //   console.log("I am adding this todo", title, desc);
  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 1;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1; // This is how we generate sno for a new todo
  //     const myTodo = {
  //       sno: sno,
  //       title: title,
  //       desc: desc,
  //     };
  //     setTodos([...todos, myTodo]); // This is how we add a new todo
  //     console.log(myTodo);
  //   }
  // };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  // useState is a hook that is used to create a state in a functional component
  // useState returns an array of two elements
  // const [state, setState] = useState(initialState);
  // state is the current state of the component
  // setState is a function that is used to update the state
  // initialState is the initial value of the state
  // useState returns an array of two elements

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // useEffect is a hook that is used to perform side effects in a functional component
  // useEffect takes two parameters
  // useEffect(callback, dependency)
  // callback is a function that is used to perform side effects
  // dependency is an array of dependencies
  // useEffect will run only when the dependencies change
  // useEffect will run only once if the dependency array is empty

  // const [todos, setTodos] = useState([
  //setTodos is a function that will be used to update the state
  //this are initial todos while creating the app
  // {
  //   sno: 1,
  //   title: "React JS",
  //   desc: "You need to learn react js to get this job done",
  // },
  // {
  //   sno: 2,
  //   title: "Django",
  //   desc: "You need to learn django to get this job done",
  // },
  // {
  //   sno: 3,
  //   title: "DRF",
  //   desc: "You need to learn DRF to get this job done",
  // },
  // ]);
  return (
    <>
      <Router>
        <Header title="React Basics" SearchBar={true} />
        {/* <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <h1>This is About Page</h1>
          </Route>
        </Switch> */}

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        {/* <Todos todos={todos} onDelete={onDelete} />
        <AddTodo addTodo={addTodo} /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
