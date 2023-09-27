import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


export const ThemeContext=React.createContext();

function App() {
  const [note, setNote] = React.useState({ title: "", content: "" });
  const [list,setList]=React.useState([]);
  return (
    <div>
      <Header />
      <ThemeContext.Provider value={{note, setNote, list, setList}} >
      <CreateArea />
      <Note />
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
