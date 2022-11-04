import NotesList from './components/notesList';
import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes,setNotes] = useState(()=>{
    const saved = JSON.parse(localStorage.getItem('react-notes-app-data'));
    return saved || " ";
  });

  const [searchText,setSearchText]=useState(''); 

  const [darkMode,setDarkMode]=useState(false);

  // useEffect(() => {
  //   const savedNotes = JSON.parse(
  //     localStorage.getItem('react-notes-app-data')
  //   );

  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);

  useEffect(()=>{
    localStorage.setItem(
          'react-notes-app-data',
          JSON.stringify(notes)
      );
  },[notes]);

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleSave={handleSave}
          handleDel={handleDel} />
      </div>
    </div>
  );
}

export default App;
