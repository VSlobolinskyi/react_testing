import Todo from "./components/todo";
import './App.css';

function App() {
  const todos = [
    {
      id: 1,
      title: 'wash dishes',
      completed: false
    },
    {
      id: 2,
      title: 'wash a car',
      completed: true
    }
  ]
  return (
    <div className="App">
      {todos.map((todo, index) => {
        return(
          <Todo key={index} todo={todo} index={index}></Todo>
        );
      })}
    </div>
  );
}

export default App;
