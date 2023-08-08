import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note(props) {
  //handleClick(deletedNote)
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <AiFillDelete fontSize={18}></AiFillDelete>
      </button>
    </div>
  );
}

export default Note;
