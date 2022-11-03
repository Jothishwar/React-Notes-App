import React from 'react';

function Header(props){
	return(
		<div className='header'>
			<h1>Notes</h1>
			<button 
				className='toggle'
				onClick={()=>props.handleDarkMode((prev)=>!prev)}
				>Toggle mode</button>
		</div>
	)
}

export default Header;