import Button from '@mui/material/Button';
import "./css/style.css"

export default function BasicButtons({variant,type,fullWidth,children}) {
  return (
    <Button className="hello" variant={variant} type={type} fullWidth={fullWidth}>{children}</Button>
  );
}