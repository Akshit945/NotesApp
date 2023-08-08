import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  //value of title and content is set
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //updating the value of the form
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  //submit
  function submitNote(event) {
    //let onAdd = props.onAdd
    props.onAdd(note);
    //ofter adding notes the title and content should be empty
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <button onClick={submitNote}>
          <GrAdd></GrAdd>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
