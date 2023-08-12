import React, { useState } from "react";
import Capsule from "./Capsule";
import Pagination from "./Pagination";
// import Capsule from "./Capsule";

const Grid = ({ store }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const startIndex = (currentPage - 1) * recordsPerPage;
  //I get the data[0] 0-9

  const endIndex = startIndex + recordsPerPage;
  //I get the next page index data[10]

  const currentPageData = store.data.slice(startIndex, endIndex);
  //It slice the data 0 to 9 because of the 10 is exclued

  const totalPages = Math.ceil(store.data.length / recordsPerPage);

  return (
    <div>
      <div className="w-11/12 m-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center align-middle text-center capitalize">
        {currentPageData?.map((ele, i) => (
          <div key={i}>
            <Capsule item={ele} />
          </div>
        ))}
      </div>
      <div>
        <Pagination
          noOfPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Grid;
