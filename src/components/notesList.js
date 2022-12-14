import Note from './note';
import AddNewNote from './AddNewNote';

function notesList(props){
	return(
		<div className='noteslist'>
			{props.notes.map(
				(note)=><Note 
					key={note.id}
					id={note.id} 
					text={note.text} 
					date={note.date}
					handleDel={props.handleDel}
					/>
				)
			}
			<AddNewNote handleSave={props.handleSave} />
		</div>
	)
}

export default notesList;