import React from "react";

function ToDoItem(props){

    function handleDoubleClick(){
        props.onDoubleClick(props.id)
    }

    return (<li onDoubleClick={handleDoubleClick}>{props.listItem}</li>)
}

export default ToDoItem;