import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './main.scss'

const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('');
  // console.log(value);

  const changeHandler = e => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`)
      setValue('')
    }
  }

  return (
    <Paper 
      onSubmit={changeHandler}
      className='paper-form' 
      sx={{border: `1px solid #ccc`, pl: 2, boxShadow: 'none'}} 
      component={"form"}
    >
        <input 
            className='search-input'
            type="text" 
            placeholder='Search...'
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <IconButton type='submit'>
            <Search />
        </IconButton>

    </Paper>
  )
}

export default SearchBar
