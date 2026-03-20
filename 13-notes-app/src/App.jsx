import React, { useState } from 'react'
import Header from "./components/Header.jsx";
import AddNote from "./components/AddNote.jsx";
import NoteSection from "./components/NoteSection.jsx";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote=(title,content)=>{
    const date = new Date().toLocaleDateString();
    console.log(date);
    const newNote = {
      id: Date.now(),
      title,
      content,
      date,
    };
    setNotes([...notes, newNote]);
  }

  return (
  <div className='min-h-screen bg-[#e6a8a8] px-2 sm:px-4 md:px-6 py-3'>
    <Header />
    <AddNote addNote={addNote} />
    <NoteSection notes={notes} />
  </div>
    
  )
}

export default App