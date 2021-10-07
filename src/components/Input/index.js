import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function InputText({placeholder,type,btnType}) {
  return (
      <>
      <InputBase
      type={type}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        fullWidth="true"
      />
      <IconButton type={btnType} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </>
  );
}
