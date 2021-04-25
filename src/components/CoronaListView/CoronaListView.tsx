import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core'

import "./style.scss";

type ListProps = {
    getListData: () => any;
    listData: Array<Object>;
    globalData: globalDataObject;
}

type globalDataObject = {
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
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

    const countryClickHandler = (country:string) => {
        history.push({pathname: '/detail',search: `?query=${country}`});
    }

    return (<div className="list-view">
        <div className="global-counter">
            <div className="global-counter__main-counter-wrap">
                <h1>Coronavirus Cases:</h1>
                <div className="global-counter__main-counter-number">
                    <span className="global-counter__total-cases">{globalData.TotalConfirmed}</span>

                </div>
            </div>
            <div className="global-counter__main-counter-wrap">
                <h1>Deaths:</h1>
                <div  className="global-counter__main-counter-number">
                    <span>{globalData.TotalDeaths}</span>
                </div>
            </div>
            <div className="global-counter__main-counter-wrap">
                <h1>Recovered:</h1>
                <div className="global-counter__main-counter-number recovered">
                    <span>{globalData.TotalRecovered}</span>
                </div>
            </div>
        </div>
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
                            <TableRow onClick={()=>countryClickHandler(row.Country)} className="table-row" hover key={row.ID}>
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