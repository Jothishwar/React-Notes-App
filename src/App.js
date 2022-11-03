import NotesList from './components/notesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';

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

  const handleSave = (text) => {
    console.log(text);
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    };
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const handleDel = (id) => {
    const newNotes=notes.filter((note)=>note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Search />
      <NotesList 
        notes={notes} 
        handleSave={handleSave}
        handleDel={handleDel} />
    </div>
  );
}

export default App;
