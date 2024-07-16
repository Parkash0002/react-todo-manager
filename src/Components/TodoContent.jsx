import { useDispatch, useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { useCallback, useState } from "react";
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";
import EditTaskPopUp from "./EditTaskPopUp";

//Defining action type as constants
const DELETE_TASK = "Delete_Task";
const SELECT_TASK = "Select_Task";

function TodoContent(){

    const dispatch = useDispatch();

    const todoList = useSelector(store=>store.todoList);
    const [popUp,setPopUp] = useState(false);
    const [taskToEdit,setTaskToEdit] = useState();

    //Adding functionality for deleting task from todolist
    const deleteTask = useCallback((e,id)=>{
        e.preventDefault();

        dispatch({
            type:DELETE_TASK,
            payload:{
                id
            }
        });
    },[dispatch]);

    
    //Adding functionality for select and deselect task
    const handleSelection = useCallback((e,id)=>{
        e.preventDefault();
        dispatch({
         type:SELECT_TASK,
         payload:{
             id
         }
        });
    },[dispatch]);

    //Displaying and hiding task edit pop up
    const handleEditButton=(e,taskObj)=>{
        e.preventDefault();
          setTaskToEdit(taskObj);
          setPopUp(true);
    }
    
    return <>
    <div className="todo-content">
        {todoList.map((taskObj)=>{
            return  <div className="todo-task" key={taskObj.id}>
         <button onClick={(e)=>handleSelection(e,taskObj.id)}> {taskObj.isSelected ? <IoCheckbox /> : <IoCheckboxOutline /> } </button>
            <span>{taskObj.task}</span>
            <button onClick={(e)=>handleEditButton(e,taskObj)}><CiEdit /></button>
            <button style={{color:"red"}} onClick={(e)=>deleteTask(e,taskObj.id)}><FaDeleteLeft /></button>
            </div>
        })}
        { //Conditional rendoring for edit task pop up
        popUp && <EditTaskPopUp setPopUp={setPopUp} taskToEdit={taskToEdit}/>
        }
    </div>
    </>
}
export default TodoContent;