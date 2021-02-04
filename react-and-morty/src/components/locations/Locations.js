import React, { useState } from "react";
import "./locations.css";
import { useLocations } from "../../api/useData";
import CardLocations from "../cardLocations/CardLocations";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Locations() {
  const classes = useStyles();
  // Pagination State
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const locations = useLocations(page);
  let cardList = [];

  let pageCount = "";

  if (locations !== undefined && locations !== "Loading...") {
    pageCount = locations.info.pages;
    cardList = locations.results.map((item) => <CardLocations key={"char-" + item.id} {...item} />);
  }

  return (
    <div className="containerLocations">
      <div className="locations">{cardList}</div>
      <div className="paginationLocations">
        <div className={classes.root}>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Locations;
