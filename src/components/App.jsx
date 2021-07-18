import React, {useState} from "react";
import Header from "./Header";
import Input from "./Input";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";

function App(){

    const [toDoList, setToDoList] = useState([]);

    function handleClick(inputText){
        setToDoList( (prevValue) => {
            return [...prevValue, inputText];
        })
    }

    function deleteItem(id){
        setToDoList( (prevValue) =>{
            return prevValue.filter( (listItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className="container">
            <Header />
            <Input onClick={handleClick} />
            <div>
                <ul>
                    {toDoList.map( (listItem, index) =>{
                        return (
                        <ToDoItem 
                        key={index}
                        id={index}
                        listItem={listItem}
                        onDoubleClick={deleteItem}
                        />)
                    })}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default App;