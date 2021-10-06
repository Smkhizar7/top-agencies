import TextField from '@mui/material/TextField';

export default function InputText({label, type}) {
    return (
        <TextField id="outlined-search" label={label} type={type} />
    )
}