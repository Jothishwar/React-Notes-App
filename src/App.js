import NotesList from './components/notesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:"this is 1st note",
      date:"01/11/2022",
    },
    {
      id:nanoid(),
      text:"this is 2nd note",
      date:"02/11/2022",
    },
    {
      id:nanoid(),
      text:"this is 3rd note",
      date:"03/11/2022",
    },
    {
      id:nanoid(),
      text:"this is 4th note",
      date:"04/11/2022",
    }
  ])
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
