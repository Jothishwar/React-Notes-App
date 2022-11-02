import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Note(){
	return(
		<div className='note'>
			<span>This is a note</span>
			<div className='note-footer'>
				<small>02-11-2022</small>
				<MdDeleteForever className='delete' size='1.3em' />
			</div>
		</div>
	)
}

export default Note;