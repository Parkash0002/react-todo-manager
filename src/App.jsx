import TodoContent from "./Components/TodoContent";
import TodoInput from "./Components/TodoInput";
import './App.css';
function App() {

  return (
    <>
     <div className="container">
        <h1>Task Manager</h1>
      <div className="todo-container">
        <TodoInput/>
        <TodoContent/>
      </div>
     </div>
    </>
  )
}
export default App
