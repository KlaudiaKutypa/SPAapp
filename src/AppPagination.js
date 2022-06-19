import  React from 'react';
import './AppPagination.css';
import {Stack, Pagination} from '@mui/material';

function AppPagination({ handleChange, currentPage}) {
 
    return(
        <Stack>
            <Pagination 
            count={2}
            color="primary"
            currentPage = {currentPage}
            onChange={handleChange}>
            </Pagination>
        </Stack>
    )
}

export default AppPagination;