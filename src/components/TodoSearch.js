import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {

    //const estado = React.useState();
    
    const onChange = (event) => {

        setSearchValue(event.target.value);
        console.log(event.target.value);

    }


    return (
        <React.Fragment>
           <p id="buscador_todos"><input value={searchValue} type="text" onChange={onChange} placeholder="Buscar"/></p>
          
        </React.Fragment>
    );


}

export {TodoSearch};