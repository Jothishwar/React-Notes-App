import Note from './note';

function notesList(props){
	return(
		<div className='noteslist'>
			{props.notes.map(
				(note)=><Note 
					key={note.id}
					id={note.id} 
					text={note.text} 
					date={note.date} 
					/>
				)
			}
		</div>
	)
}

export default notesList;