import React from "react";
import { ThemeContext } from "./App";

function Note() {
  const { list, setList } = React.useContext(ThemeContext);

  function Items(value, index) {
    return (
      <div className="note">
        <h1>{value.title}</h1>
        <p>{value.content}</p>
        <button onClick={() => deleteItem(index)}>Borrar</button>
      </div>
    );
  }

  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((item, index) => index !== id);
    });
  }

  return list.map(Items);
}

export default Note;
