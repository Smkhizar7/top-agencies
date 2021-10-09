import * as React from 'react';
import { TextField } from '@mui/material';
export default function MyInputText({ label, error, type, onBlur, onChange,fullWidth }) {
    return (
        <>
            <TextField
                onBlur={onBlur}
                onChange={onChange}
                type={type}
                error={error}
                id={error ? "standard-error-helper-text": "standard-basic"}
                label={label}
                helperText={error}
                variant="standard"
                fullWidth={fullWidth}
                
            />
        </>
    );
}
