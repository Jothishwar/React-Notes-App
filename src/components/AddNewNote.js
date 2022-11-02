import { useState } from 'react';

function AddNewNote(props){
	const [note,setNote]=useState('');

	function handleChange(e){
		// console.log(e.target.value);
		const text=e.target.value;
		setNote(text);
	};
	const handleSaveClick = () => {
		if(note.trim().length > 0){
			props.handleSave(note);
			setNote('');
		}
	};
	const date=new Date();

	return(
		<div className='note new'>
			<textarea
			placeholder="Type here....."
			row='8'
			columns='10'
			value={note}
			onChange={handleChange}>
			</textarea>
			<div className='note-footer'>
				<small>{date.toLocaleDateString()}</small>
				<button className='save' onClick={handleSaveClick}>Save</button>
			</div>
		</div>
	);
}


export default AddNewNote;