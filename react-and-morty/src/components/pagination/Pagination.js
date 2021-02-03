import React, {useState} from "react";

import "./pagination.css";
import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import { mainUrls } from "../../api/dataRoutes";


function Paginator() {

	function pageLeft() {
		page < 2 ? setPage(1) : setPage(page -1);
		}

	function pageRight() {
		page > 33 ? setPage(34) : setPage(page + 1);
	}

	const [page, setPage] = useState(1);

	return(
		<div className="pag-main">
			<img src={leftArrow} alt="arrow"  onClick={pageLeft}></img>
			<p><a href={mainUrls}>{page-3}</a> {page-2} {page-1} {page} {page+1} {page+2} {page+3}</p>
			<img src={rightArrow} alt="arrow" onClick={pageRight}></img>
		</div>
	)
}

export default Paginator;