import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core'
import CoronaHeadLines from '../common/CoronaHeadlines/CoronaHeadlines'
import "./style.scss";

type DetailProps = {
    getDetailData: (arg0: string) => any;
    countryListData: Array<Object>;
    countryData: Array<any>;
}



type item = {
    Date: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DetailView = ({ getDetailData, countryListData = [], countryData = [] }: DetailProps) => {
    countryListData = countryListData.reverse();
    let query = useQuery();
    let data = query.get('query');
    React.useEffect(() => {
        getDetailData(data)
        return () => null;
    }, [data])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (<div className="list-view">
        <CoronaHeadLines staticsData={countryData[0] || {}}/>
        <h3> This Table shows every day data for the {data}.</h3>
        <TableContainer className="container" component={Paper}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>

                        <TableCell>Date</TableCell>
                        <TableCell align="right">Confirmed</TableCell>
                        <TableCell align="right">Deaths</TableCell>
                        <TableCell align="right">Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {countryListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: item) => {
                        return (
                            <TableRow className="table-row" hover key={row.Date}>
                                <TableCell component="th" scope="row">
                                    {row.Date}
                                </TableCell>

                                <TableCell align="right">{row.Confirmed}</TableCell>
                                <TableCell align="right">{row.Deaths}</TableCell>
                                <TableCell align="right">{row.Recovered}</TableCell>

                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            component="div"
            count={countryListData.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div >);
}

export default DetailView;