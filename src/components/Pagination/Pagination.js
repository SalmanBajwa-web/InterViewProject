import './Pagination.css';
import React from 'react';

const Pagination = ({ currentPage,postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className='pagination'>
        {pageNumbers.map(number => {
          if(currentPage === number){
            return (
              <div key={number} className='page-item '>
                <button onClick={() => paginate(number)} href='!#' className='btn pageActive'>
                  {number}
                </button>
              </div>
            )
          }else{
            return (
              <div key={number} className='page-item'>
                <button onClick={() => paginate(number)} href='!#' className='btn '>
                  {number}
                </button>
              </div>
            )
          }
         
        })}
      </div>
    </nav>
  );
};

export default Pagination;
