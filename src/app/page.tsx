'use client';
import React, { useState } from 'react';
import { useGetPayoutListQuery } from '@/api/baseQueries/payoutApi/getPayout';
import Pagination from '@/components/Pagination';
import {
  Main,
  SearchBox,
  Caption,
  SearchIcon,
  SearchInput,
  Table,
  Tbody,
  Td,
  Th,
  ThRow,
  Thead,
  Title,
  Trow,
  CaptionContainer,
  SubTitle
} from '@/components/common.styled';
import useDebounce from '@/hooks/useDebounce';
import { formatDate } from '@/utils/dateUtils';
import { formatCurrency } from '@/utils/numberUtils';
import CustomDropdown from '@/components/Dropdown';

const limitOptions  =  [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '30', value: '30' },
] 

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState('10');
  const [pageNo, setPageNo] = useState(1);
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const query = useGetPayoutListQuery({
    search: debouncedSearch,
    page: pageNo,
    limit,
  });

  const payoutList =
    debouncedSearch && !query.isFetching ? query.data : query.data?.data || [];

  const handlePageChange = (newPage: number) => {
    setPageNo(newPage);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleLimitChange = (e: any) => {
    setLimit(e);
  };

  return (
    <Main>
      <Title>Payouts</Title>
      <Table>
        <>
          <Caption>
            <CaptionContainer>
              <SubTitle>Payout History</SubTitle>
              <SearchBox>
                <SearchInput
                  type="text"
                  placeholder="Search by User Name"
                  onChange={handleSearchChange}
                />
                <SearchIcon className="fa fa-search" />
              </SearchBox>
              <CustomDropdown
                onChange={handleLimitChange}
                value={limit}
                label='Set Page Limit'
                options={limitOptions}
              />
            </CaptionContainer>
          </Caption>
        </>
        <Thead>
          <ThRow>
            <Th>Date & time</Th>
            <Th>Status</Th>
            <Th>Value</Th>
            <Th>Username</Th>
          </ThRow>
        </Thead>

        <Tbody>
          {payoutList.map(({ dateAndTime, status, username, value }, i) => (
            <Trow key={i} isEven={i%2 === 0 }>
              <Td>{formatDate(dateAndTime)} </Td>
              <Td className='badge'><p>{status === 'Completed' ? 'Paid' : status} </p></Td>
              <Td>{formatCurrency(value)} </Td>
              <Td>{username}</Td>
            </Trow>
          ))}
        </Tbody>
      </Table>
      <Pagination
        onPageChange={handlePageChange}
        className=""
        currentPage={pageNo}
        totalPageCount={
          query.data?.metadata?.totalCount || query.data?.data?.length || 0
        }
      />
    </Main>
  );
}
