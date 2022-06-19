import React, { useEffect, useState } from "react";
import './App.css';
import {Box, TextField} from '@mui/material';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';
import AppPagination from './AppPagination';


function App() {

  const API = "https://reqres.in/api/products";
  const [products, setProducts] = useState([]);

  const handleSeeProducts = () => {
    fetch(`${API}`)
    .then((response) => response.json())
    .then((product) => setProducts(product));
    }
  console.log(products.data)
 
  useEffect(() => {
    handleSeeProducts();
    },[]);

  //Input 
  const [number, setNumber]=useState('');
 
  //Pagination
   const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="App">
      <div className="App_content">
        <Box component="form">
          <TextField id="outlined-basic" label="ID number only..." variant="outlined" type="number" onChange={(e) => setNumber(e.target.value)}></TextField>
        </Box>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 700, fontSize: "1.1rem" }}>ID</TableCell>
              <TableCell align="center" sx={{ fontWeight: 700, fontSize: "1.1rem" }}>Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 700, fontSize: "1.1rem" }}>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {products.data.filter(ev => {
            if (number == "") {
            return ev}
            else if (ev.id == number) {
            return ev}}).slice(indexOfFirst, indexOfLast).map((prod) => (
          <TableRow key={prod.id}>
              <TableCell align="center" sx = {{backgroundColor: prod.color, fontSize: "1.1rem"}}>{prod.id}</TableCell>
              <TableCell align="center" sx = {{backgroundColor: prod.color, fontSize: "1.1rem"}}>{prod.name}</TableCell>
              <TableCell align="center" sx = {{backgroundColor: prod.color, fontSize: "1.1rem"}}>{prod.year}</TableCell>
          </TableRow>))}
          </TableBody>
        </Table>
        </TableContainer>
        <AppPagination currentPage={currentPage} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
