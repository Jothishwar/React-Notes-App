import React from 'react';
import { MdSearch } from "react-icons/md";

function Search(){
	return (
		<div className='search'>
			<MdSearch />
			<input type='text' placeholder='Type here to search....' />
		</div>
	)
}

export default Search;