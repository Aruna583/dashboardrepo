import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

  return (
    <div style={{position: 'relative', width: '300px', margin: '0 auto'}} className='search-bar'>
        <input
        type='text'
        placeholder='SearchTerm...'
        value={searchTerm}
        onChange={handleChange}
        style={{
            padding: '10px 10px 10px 40px',
            width: '100%',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid lightpink'
        }}
        />
        <FaSearch style={{ 
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            color: 'lightpink',
        }}/>
    </div>
  )
}

export default SearchBar