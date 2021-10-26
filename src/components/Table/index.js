import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db, doc, updateDoc } from "../../confiq/Firebase";


export default function DenseTable({rows}) {
  const activeStatus = async (ID) => {
        const orderRef = doc(db, "orders", ID);
        await updateDoc(orderRef, {
            orderStatus: "active"
        });
  }
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Order Id</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Contact Person</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Change Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.projectName}
              </TableCell>
              <TableCell align="right">{row.orderId}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.contactPerson}</TableCell>
              <TableCell align="right">{row.orderStatus}</TableCell>
              <TableCell align="right">
                  <button onClick={()=>activeStatus(row.orderId)}>Active Order</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}