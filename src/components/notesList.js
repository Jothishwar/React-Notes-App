import Note from './note';

function notesList(){
	return(
		<div className='noteslist'>
			<Note />
			<Note />
			<Note />
			<Note />
		</div>
	)
}

export default notesList;