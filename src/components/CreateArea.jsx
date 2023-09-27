import React from "react";
import { ThemeContext } from "./App";

function CreateArea() {
  const { note, setNote, setList } = React.useContext(ThemeContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    setList((prevlist) => {
      return [...prevlist, note];
    });
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Titulo"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Toma nota..."
          rows="3"
        />
        <button onClick={submitNote}>Agregar</button>
      </form>
    </div>
  );
}

export default CreateArea;
