import React from 'react';
import {TablePagination} from "@mui/material";

type TablePaginationDemoType= {
    currentPage: number
    pagesCount : number
    onPageChanged: (currentPage: number) => void
}

export default function TablePaginationDemo(props:TablePaginationDemoType) {

    const page = props.currentPage
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
       props.onPageChanged (newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        props.onPageChanged (0);
    };

    return (
        <TablePagination
            component="div"
            count={props.pagesCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
