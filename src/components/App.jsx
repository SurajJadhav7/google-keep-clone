import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: ""
    }
  ]);

  function addNote(event) {
    const [title, content] = event.target;
    setNotes((prev) => [
      ...notes,
      { title: title.value, content: content.value }
    ]);
    event.preventDefault();
  }

  function deleteNote(key) {
    console.log("key", key);
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== key;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((x, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            title={x.title}
            content={x.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
