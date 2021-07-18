import React, {useState} from "react";

function Input (props){

    const [inputText, setInputText] = useState("");

    function handleChange(event){
        setInputText(event.target.value)
    }

    return (
        <div className="form">
            <input type="text" onChange={handleChange} placeholder="Enter here" value={inputText}/>
            <button onClick={ () => {
                props.onClick(inputText);
                setInputText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input;