import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Note(props){
	
	return(
		<div className='note'>
			<span>{props.text}</span>
			<div className='note-footer'>
				<small>{props.date}</small>
				<MdDeleteForever 
					className='delete' 
					size='1.3em' 
					onClick={()=>props.handleDel(props.id)} />
			</div>
		</div>
	)
}

export default Note;