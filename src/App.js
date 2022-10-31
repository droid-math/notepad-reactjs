import { useState } from 'react';
import './App.scss';
import uuid from "react-uuid"
import LeftNavBar from './LeftNavBar'
import Main from './Main'

function App() {
  const [notes, setNotes] = useState([]);
  const onAdd = function () {
    console.log("onAdd")
    const note = {
      noteId: uuid(), 
      title: 'Nova nota sem nome',
      bodyText: '',
      createDate: new Date().toLocaleString()
    }
    setNotes([note, ...notes])

  }
  const onDelete = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  return (
    <div className='App'>
      <LeftNavBar notes={notes} onAdd={onAdd} onDelete={onDelete}/>
      <Main />
    </div>
  )
}

export default App;
