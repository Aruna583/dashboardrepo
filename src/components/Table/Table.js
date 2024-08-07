import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';

function createData(name,image, order, amount, status) {
  return { name, image, order, amount, status };
}
const changeStatusColor = (status) =>{
    if(status === 'Delivered' || status === 'Approved'){
        return{
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    } else if(status === 'Pending' || status === 'Cancelled'){
        return {
            background: '#ffadad8f',
            color: "red"
        }
    }
}

const rows = [
  createData('Wade Warren', img1,15089,  "$24.44", 'Approved'),
  createData('Jane Copper', img2,23897, "$37.00", 'Pending'),
  createData('Guy Hawkin',img3, 26278, "$24.00", 'Cancelled'),
  createData('Cody Fisher',img1, 30785, "$101.00", 'Delivered'),
  createData('Sravan Jhosh',img1, 35896, "$49.00", 'Approved'),
];

export default function BasicTable() {
  return (
    <div className='Table'>
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
    <h1 className='table-heading'>Recent Orders</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Order No.</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className='row-image-div'>
                <div>
                <img src={row.image} alt={row.name} className='row-image'/>
                </div>
                <div className='row-customer-name'>
                {row.name}
                </div>
                </div>
                
              </TableCell>
              <TableCell align="left">{row.order}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">
                <span className='status'
                style={changeStatusColor(row.status)}>
                    {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
