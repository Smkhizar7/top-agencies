import * as React from 'react';
import { TextField } from '@mui/material';
export default function MyInputText({name,label, error, type, onBlur, onChange,fullWidth ,helperText}) {
    return (
        <>
            <TextField
                onBlur={onBlur}
                onChange={onChange}
                type={type}
                error={error}
                id={error ? "standard-error-helper-text": "outlined-helperText"}
                label={label}
                helperText={helperText}
                name={name}
                variant="standard"
                fullWidth={fullWidth}
                
            />
        </>
    );
}
