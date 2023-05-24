// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "React JS",
      desc: "You need to learn react js to get this job done",
    },
    {
      sno: 2,
      title: "Django",
      desc: "You need to learn django to get this job done",
    },
    {
      sno: 3,
      title: "DRF",
      desc: "You need to learn DRF to get this job done",
    },
  ];
  return (
    <>
      <Header title="React Basics" SearchBar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
