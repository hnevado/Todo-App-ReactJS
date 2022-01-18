import React from "react";

function useLocalStorage(itemName,itemValue)
{
    const localStorageItem = localStorage.getItem(itemName);
    
    
    let parsedItem;
  
    if (localStorageItem)
    {
      //Para volver a transformarla en JS, llamo a JSON.parse
      parsedItem=JSON.parse(localStorageItem);
    }
    else
    {
      localStorage.setItem(itemName,JSON.stringify(itemValue)); //Con stringify transformo en texto cualquier dato, en este caso un array
      parsedItem=itemValue;
    }

    const [item,setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {

        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
  
        setItem(newItem);
  
    }

    return [

        item,
        saveItem,

    ]

}

export {useLocalStorage};