import React from 'react';
import { MdSearch } from "react-icons/md";

function Search(props){
	return (
		<div className='search'>
			<MdSearch size='1.5em'/>
			<input 
				type='text' 
				placeholder='Type here to search....'
				onChange={(e)=>props.handleSearch(e.target.value)} />
		</div>
	)
}

export default Search;