//Saving store to local storage
const saveStoreToLocalStorage = (store)=>{
    try{
        localStorage.setItem('store',JSON.stringify(store));
    }catch(e){
        console.log("error while saving store to local storage",e);
    }
};

//Getting store from local storage
const getStoreFromLocalStorage = ()=>{
    try{
      let storeFromLocalStorage = localStorage.getItem('store');
      if(storeFromLocalStorage){
        return JSON.parse(storeFromLocalStorage);
      }     
    }catch(e){
        console.log("error while geting store from local storage",e);
    }
    return undefined;
};

export {saveStoreToLocalStorage,getStoreFromLocalStorage};