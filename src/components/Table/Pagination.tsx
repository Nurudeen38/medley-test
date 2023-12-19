import React from 'react';
import classnames from 'classnames';
import LeftArrow from "@/asssets/icons/pag-arrow-left.svg"
import RightArrow from "@/asssets/icons/pag-arrow-right.svg"
import { usePagination, DOTS } from '@/hooks/usePagination';
import Image from 'next/image';

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalPageCount: number;
  currentPage: number;
  className: string;
};

const Pagination = (props:PaginationProps) => {
  const {
    onPageChange,
    totalPageCount,
    currentPage,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  
  return (
    <ul
      className={classnames('pagination-container mt-6', {
        [className]: className,
      })}>
      <li
        className={classnames('pagination-item !p-0', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}>
        <Image className='h-18 w-18' src={LeftArrow} alt='left' />
      </li>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className='pagination-item dots'>
              &#8230;
            </li>
          );
        }

        if (typeof pageNumber === 'number')
          return (
            <li
              key={index}
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          );
      })}
      <li
        className={classnames('pagination-item !p-0', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}>
        <Image className='h-18 w-18' src={RightArrow} alt='right' />
      </li>
    </ul>
  );
};

export default Pagination;
