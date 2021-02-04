import React, {useState, Component} from "react";
import "./pagination.css";
//import leftArrow from "../../images/left-arrow.png";
//import rightArrow from "../../images/right-arrow.png";
import { mainUrls } from "../../api/dataRoutes";

import Pagination from "react-js-pagination";
/*require("bootstrap/less/bootstrap.less");*/

class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 3
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div className="pag-main">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

/*function Paginator() {

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
}*/

export default Paginator;