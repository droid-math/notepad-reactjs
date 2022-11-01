import { useState } from 'react';
import './App.scss';
import idgen from "react-id-generator"
import LeftNavBar from './LeftNavBar'
import Main from './Main'

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAdd = function () {
    console.log("onAdd")
    const note = {
      noteId: idgen('note-'), 
      title: 'Nova nota sem nome',
      bodyText: '',
      createDate: new Date().toLocaleString()
    }
    setNotes([note, ...notes]);

  }
  const onGetActiveNote = () => {
      return notes.filter((note) => note.noteId === activeNote);
  }
  const onDelete = (noteId) => {
    setNotes(notes.filter((note) => note.noteId !== noteId));
  }

  return (
    <div className='App'>
      <LeftNavBar notes={notes} onAdd={onAdd} onDelete={onDelete} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main getActiveNote={onGetActiveNote()}/>
    </div>
  )
}

export default App;
