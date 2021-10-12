import Button from '@mui/material/Button';
import { Children } from 'react';

export default function BasicButtons({variant,type,fullWidth,children}) {
  return (
    <Button variant={variant} type={type} fullWidth={fullWidth}>{children}</Button>
  );
}