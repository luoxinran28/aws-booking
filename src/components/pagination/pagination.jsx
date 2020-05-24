import React from 'react';


const Pagination = (props) => {
  const { totalResultAmount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(totalResultAmount / pageSize);
  const pages = getPagesArray(pagesCount);

  return (
    <nav><ul className="pagination">
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <button className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul></nav>
  );

  function getPagesArray(pagesCount) { 
    let pages = [];
    for (let i = 1;i <= pagesCount; i++) { 
      pages.push(i);
    }
    return pages;
  }

}

export default Pagination;