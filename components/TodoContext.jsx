import React from "react";

const TodoContext = React.createContext();

function TodoProvider(){
    return(
        <TodoContext.provider>

        </TodoContext.provider>
    )
}



export { TodoContext, TodoProvider };