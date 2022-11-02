import React from 'react';

function AddNewNote(){
	return(
		<div className='note new'>
			<textarea
			placeholder="Type here....."
			row='8'
			columns='10'>
			</textarea>
			<div className='note-footer'>
				<small>200 characters</small>
				<button className='save'>Save</button>
			</div>
		</div>
	);
}


export default AddNewNote;