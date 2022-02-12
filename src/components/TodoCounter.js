import React from 'react';

function TodoCounter({total, completed}) {


return (

    <h2 className="contador-todos">Completado {completed} de {total} todos</h2>

);

}

export { TodoCounter };