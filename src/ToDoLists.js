import React from 'react'


const ToDoLists = (props) => {
    const delteItems = () => {
        console.log("deleted")
    }
    return (
        <>
        <div className="todo_style">

        <i className="fa fa-times" aria-hideen="true" onclick ={()=> {
            props.onSelect(props.id);
        }} 
        />
         <li> {props.text} </li>   

         </div>
        </>
      
  
    );

};

    export default ToDoLists;