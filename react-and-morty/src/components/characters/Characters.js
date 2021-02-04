import React, { useState } from "react";
import "./characters.css";
import { useCharacters } from "../../api/useData";
import Card from "../card/Card";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Characters() {
  const classes = useStyles();
  // Pagination State
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const characters = useCharacters(page);
  let cardList = [];

  let pageCount = "";

  if (characters !== undefined && characters !== "Loading...") {
    pageCount = characters.info.pages;
    cardList = characters.results.map((item) => <Card key={"char-" + item.id} {...item} />);
  }

  return (
    <div className="containerCharacters">
      <div className="characters">{cardList}</div>
      <div className="paginationCharacters">
        <div className={classes.root}>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Characters;
