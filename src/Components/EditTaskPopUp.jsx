import { useCallback, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";

//Defining action type as constants
const EDIT_TASK = "Edit_Task";

function EditTaskPopUp({setPopUp,taskToEdit}){

    const dispatch = useDispatch();
    const [inputFieldvalue,setInputFieldValue] = useState(taskToEdit.task);

    const handleInputChange = (e)=>{
         setInputFieldValue(e.target.value);
    }

   //Adding functionality to handle Enter key
    const handleInputKey = (e)=>{
          if(e.key==="Enter"){
            editTask(e);
          }
    }
    
    //Adding functionality for editing task present in todolist
    const editTask=useCallback((e)=>{
        e.preventDefault();
        const task=inputFieldvalue.trim();
       
        if(task!=="" && task.length<=100){
            dispatch({
               type:EDIT_TASK,
               payload:{
                  ...taskToEdit,
                  task
               }
            });
        }else{
            alert("Task should contain 1-100 chars");
          }

        setPopUp(false);
    },[dispatch,inputFieldvalue,taskToEdit,setPopUp]);


    return <>
    <div className="edit-task-container">
        <div className="edit-task-popup">
        <span onClick={()=>setPopUp(false)}><FaWindowClose id="close-icon"/></span>
        <h2>Edit Your Task</h2>
        <input type="text" value={inputFieldvalue} onChange={handleInputChange} onKeyDown={handleInputKey} />
        <button onClick={(e)=>editTask(e)}>Update</button>
        </div>
    </div>
    </>
}
export default EditTaskPopUp;