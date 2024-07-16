import { createStore } from "redux";
import { getStoreFromLocalStorage, saveStoreToLocalStorage } from "../LocalStorage";

//Setting up initial value for the store
const initial_state = {

   todoList : [
    {
        id:1,
        isSelected:false,
        task:"This is my first task"
    },
    {
        id:2,
        isSelected:false,
        task:"This is my second task"
    },
]
}

//Defining action type as constants
const ADD_TASK = "Add_Task";
const EDIT_TASK = "Edit_Task";
const DELETE_TASK = "Delete_Task";
const SELECT_TASK = "Select_Task";

//Reducer function for the store
const reducer = (store=initial_state,action)=>{
    const {type,payload} = action;

  switch(type){

    case ADD_TASK : return {
        ...store,
        todoList : [...store.todoList,payload]
    }
    break;
    
    case EDIT_TASK : return {
        ...store,
        todoList:store.todoList.map((taskObj)=>{
            if(taskObj.id===payload.id){
                taskObj.task=payload.task;
            }
            return taskObj;
        })
    }
    break;

    case DELETE_TASK : return {
        ...store,
        todoList : store.todoList.filter((taskObj)=>taskObj.id!==payload.id)
    }
    break;

    case SELECT_TASK : return {
        ...store,
        todoList : store.todoList.map((taskObj)=>{
            if(taskObj.id===payload.id){
                 taskObj.isSelected = taskObj.isSelected?false:true;
            }
            return taskObj
        })
    }
    break;

    default : return store;
  }
}

//getting store from local storage 
const storeFromLocalStorage = getStoreFromLocalStorage();

//Creating store to handle data passing
const store = createStore(reducer,storeFromLocalStorage);

//Updating store present in local storage 
store.subscribe(()=>{
    saveStoreToLocalStorage(store.getState());
})

export default store;