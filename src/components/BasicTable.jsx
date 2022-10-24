import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(location, views, sales, conversion, total) {
  return { location, views, sales, conversion, total };
}

const rows = [
  createData('google.com', 3746, 752, '43%', '$19,291'),
  createData('facebook.com', 8576, 800, '25%', '$20,200'),
  createData('twitter.com', 9000, 750, '35%', '$16,250'),
  createData('Direct, email, IM', 6500, 690, '40%', '$18,460'),
  createData('linkedin.com', 9752, 978, '35%', '$16,527'),
  createData('instagram.com', 6500, 900, '55%', '$15,527'),
];

export default function BasicTable() {
  const tableDataStyle = {
    textAlign: 'left',
    font: 'normal normal normal 14px/20px Source Sans Pro',
    letterSpacing: '0px',
    color: '#4D4F5C',
  };
  const tableHeaderStyle = {
    backgroundColor: '#F5F6FA',
  };
  const tableHeaderDataStyle = {
    textAlign: 'left',
    font: 'normal normal 600 14px/18px Source Sans Pro',
    letterSpacing: '0px',
    color: '#A3A6B4',
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={tableHeaderStyle}>
            <TableCell sx={tableHeaderDataStyle}>Location</TableCell>
            <TableCell sx={tableHeaderDataStyle}>Views</TableCell>
            <TableCell sx={tableHeaderDataStyle}>Sales</TableCell>
            <TableCell sx={tableHeaderDataStyle}>
              Conversion
            </TableCell>
            <TableCell sx={tableHeaderDataStyle}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.location}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={tableDataStyle}
              >
                {row.location}
              </TableCell>
              <TableCell align="right" sx={tableDataStyle}>
                {row.views}
              </TableCell>
              <TableCell align="right" sx={tableDataStyle}>
                {row.sales}
              </TableCell>
              <TableCell align="right" sx={tableDataStyle}>
                {row.conversion}
              </TableCell>
              <TableCell align="right" sx={tableDataStyle}>
                {row.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
