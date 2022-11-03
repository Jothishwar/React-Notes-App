import React from 'react';
import { MdSearch } from "react-icons/md";

function Search(){
	return (
		<div className='search'>
			<MdSearch size='1.5em'/>
			<input type='text' placeholder='Type here to search....' />
		</div>
	)
}

export default Search;