import React from 'react';

function TodoSearch() {

    //const estado = React.useState();
    const [searchValue, setSearchValue] = React.useState('');
    const onChange = (event) => {

        setSearchValue(event.target.value);
        console.log(event.target.value);

    }


    return (
        <React.Fragment>
           <p id="buscador_todos"><input value={searchValue} type="text" onChange={onChange} placeholder="Buscar"/></p>
           <p>{searchValue}</p>
        </React.Fragment>
    );


}

export {TodoSearch};