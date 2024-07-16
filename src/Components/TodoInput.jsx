import { useDispatch} from "react-redux";
import { useCallback, useRef } from "react";

//Defining action type as constants
const ADD_TASK = "Add_Task";

function TodoInput(){

   const dispatch = useDispatch();
   const inputField = useRef();

   //Adding functionality to handle Enter key
   const handleInputField=(e)=>{
    if(e.key==="Enter")
        addTask(e);
   }

   //Geting task from input field and adding it into todolist
   const addTask= useCallback((e)=>{
    e.preventDefault();
    const task = inputField.current.value.trim();
    const id=Date.now().toString();
    if(task !=="" && task.length<=100){
      dispatch({
        type:ADD_TASK,
        payload:{
          id,
          isSelected:false,
          task
        }
      });
    }else{
      alert("Task should contain 1-100 chars");
    }
    inputField.current.value="";
   },[dispatch]);

    return <>
      <div className="todo-input">
        <input type="text" placeholder="Enter your todo task here..." ref={inputField} onKeyDown={handleInputField}></input>
        <button className="btn btn-primary" onClick={addTask}>Add task</button>
      </div>
    </>
}
export default TodoInput;