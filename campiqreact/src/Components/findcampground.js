import React, { useReducer, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { visuallyHidden } from "@mui/utils";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import ReactStars from "react-rating-stars-component";
import CampMap from "./campmap";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "campsitename",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "city",
    numeric: false,
    disablePadding: false,
    label: "City",
  },
  {
    id: "province",
    numeric: false,
    disablePadding: false,
    label: "Province",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, numSelected } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell width="1%"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h5"
        id="tableTitle"
        component="div"
        textAlign="center"
      >
        Campground List
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function CampgroundListComponent() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("campsitename");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const initialState = {
    dropDownSelection: [],
    campgroundNames: [],
    province: [],
    city: [],
    campgrounds: [],
    campgroundsStatic: [],
    filteredRows: [],
    isSearched: false,
    radioDataSent: false,
    tableDataSent: false,
  };
  const GRAPHURL = "http://localhost:5000/graphql";

  var queryCampgrounds = `query{campgrounds{campsitename,city,province,unservicedfee,servicedfee,googlerating,userrating,latitude,longitude,equipmentrentals,firewood,dumpstation,additionalvehicle}}`;
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  const [searched, setSearched] = useState("");
  const [open, setOpen] = React.useState(false);
  const [googleRating, getGoogleRating] = React.useState(0);
  const [userRating, getUserRating] = React.useState(0);

  const userRatings = {
    size: 30,
    value: userRating,
    edit: false,
  };

  const googleRatings = {
    size: 30,
    value: googleRating,
    edit: false,
  };

  const requestSearch = (searchedVal) => {
    state.filteredRows = state.campgrounds?.filter((row) => {
      return row.campsitename.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setState({
      campgrounds: state.filteredRows,
    });
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  useEffect(() => {
    fetchCampgrouds();
  }, []);
  const fetchCampgrouds = async () => {
    try {
      let response = await fetch(GRAPHURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: queryCampgrounds,
        }),
      });
      let json = await response.json();
      let uniqueNames = [
        ...new Set(json.data.campgrounds.map((a) => a.campsitename)),
      ];
      setState({
        campgrounds: json.data.campgrounds,
        campgroundNames: uniqueNames,
        filteredRows: json.data.campgrounds,
      });
    } catch (error) {
      console.log(error);
      setState({
        msg: `Problem loading server data - ${error.message}`,
      });
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, campsitename, googleRating, userRating) => {
    const selectedIndex = selected.indexOf(campsitename);
    let newSelected = [];

    //if (selectedIndex === -1) {
    if (selected.length <= 0)
      newSelected = newSelected.concat(selected, campsitename);
    else newSelected = newSelected.slice(0, selectedIndex);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    //}

    getGoogleRating(googleRating);
    getUserRating(userRating);
    setOpen(!open);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (campsitename) => selected.indexOf(campsitename) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - state.campgrounds.length)
      : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 350 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={state.campgrounds.length}
            />

            <TableBody>
              {stableSort(state.campgrounds, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.campsitename);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <React.Fragment>
                      <TableRow
                        hover
                        onClick={(event) =>
                          handleClick(
                            event,
                            row.campsitename,
                            row.googlerating,
                            row.userrating
                          )
                        }
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.campsitename}
                        selected={isItemSelected}
                      >
                        <TableCell>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                          >
                            {isItemSelected ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </IconButton>
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.campsitename}
                        </TableCell>
                        <TableCell align="left">{row.city}</TableCell>
                        <TableCell align="left">{row.province}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={6}
                        >
                          {isItemSelected && open && (
                            <Collapse in={open} timeout="auto" unmountOnExit>
                              <Box sx={{ margin: 1 }}>
                                <CampMap
                                  lat={row.latitude}
                                  lng={row.longitude}
                                ></CampMap>
                                <Table size="small" aria-label="campsiteinfo">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell width="40%">
                                        <div>
                                          <b>Equipment Rentals</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="60%">
                                        {row.equipmentrentals}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="40%">
                                        <div>
                                          <b>Firewood</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="60%">
                                        {row.firewood}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="40%">
                                        <div>
                                          <b>Dump Station</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="60%">
                                        {row.dumpstation}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="40%">
                                        <div>
                                          <b>Additional Vehicle</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="60%">
                                        {row.additionalvehicle}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="40%">
                                        <div>
                                          <b>Unserviced Fee</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="60%">
                                        {row.unservicedfee}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="40%">
                                        <div>
                                          <b>Serviced Fee</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="20%">
                                        {row.servicedfee}
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="50%">
                                        <div>
                                          <b>User Rating</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="50%">
                                        <ReactStars {...userRatings} />
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell width="50%">
                                        <div>
                                          <b>Google Rating</b>
                                        </div>
                                      </TableCell>
                                      <TableCell width="50%">
                                        <ReactStars {...googleRatings} />
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                </Table>
                              </Box>
                            </Collapse>
                          )}
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={state.campgrounds.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Collapse"
      />
    </Box>
  );
}
