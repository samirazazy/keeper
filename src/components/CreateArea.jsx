import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handel(e) {
    const { name, value } = e.target;
    setNote((previousState) => ({ ...previousState, [name]: value }));
  }

  function addNote(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          valu={note.title}
          onChange={handel}
          name='title'
          placeholder='Title'
        />
        <textarea
          value={note.content}
          onChange={handel}
          name='content'
          placeholder='Take a note...'
          rows='3'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
