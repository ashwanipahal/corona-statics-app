import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core'
import CoronaHeadLines from '../common/CoronaHeadlines/CoronaHeadlines';
import "./style.scss";
import type { globalDataObject } from '../common/CoronaHeadlines/CoronaHeadlines'

type ListProps = {
    getListData: () => any;
    listData: Array<Object>;
    globalData: globalDataObject;
}

type item = {
    Country: string;
    ID: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

const ListView = ({ getListData, listData = [], globalData }: ListProps) => {
    React.useEffect(() => {
        getListData()
        return () => null;
    }, [])
    let history = useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const countryClickHandler = (country: string) => {
        history.push({ pathname: '/detail', search: `?query=${country}` });
    }

    return (<div className="list-view">
        <CoronaHeadLines staticsData={globalData} />
        <TableContainer className="container" component={Paper}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Total Confirmed</TableCell>
                        <TableCell align="right">Total Deaths</TableCell>
                        <TableCell align="right">Total Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {listData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: item) => {
                        return (
                            <TableRow onClick={() => countryClickHandler(row.Country)} className="table-row" hover key={row.ID}>
                                <TableCell component="th" scope="row">
                                    {row.Country}
                                </TableCell>
                                <TableCell align="right">{row.TotalConfirmed}</TableCell>
                                <TableCell align="right">{row.TotalDeaths}</TableCell>
                                <TableCell align="right">{row.TotalRecovered}</TableCell>

                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            component="div"
            count={listData.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div >);
}

export default ListView;