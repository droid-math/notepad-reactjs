import { useState } from 'react';
import './App.scss';
import LeftNavBar from './LeftNavBar'
import Main from './Main'

function App() {
  const [notes, setNotes] = useState([]);


  return (
    <div className='App'>
      <LeftNavBar notes={notes}/>
      <Main />
    </div>
  )
}

export default App;
