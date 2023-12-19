'use client';
import React, { useState } from 'react';
import { useGetPayoutListQuery } from '@/api/baseQueries/payoutApi/getPayout';
import {
  Main,
  Title,
  SubTitle,
  Badge,
  SubHeaderContainer,
} from '@/components/common.styled';
import useDebounce from '@/hooks/useDebounce';
import { formatDate } from '@/utils/dateUtils';
import { formatCurrency } from '@/utils/numberUtils';
import CustomDropdown from '@/components/Dropdown';
import Table from '@/components/Table/Table';
import Search from '@/components/Search/Search';

const limitOptions = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '30', value: '30' },
];

const payoutColumns = [
  {
    accessor: 'dateAndTime',
    label: 'Date & time',
    format: (value: string) => formatDate(value),
  },
  {
    accessor: 'status',
    label: 'Status',
    format: (value: string) => (
      <Badge status={value}>{value === 'Completed' ? 'Paid' : value}</Badge>
    ),
  },
  {
    accessor: 'value',
    label: 'Value',
    format: (value: string) => formatCurrency(value),
  },
  {
    accessor: 'username',
    label: 'Username',
    format: (value: string) => (value ? value : '--'),
  },
];

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

  const isLoading = query.isLoading || query.isFetching;

  const pageCount =
    Math.floor((query.data?.metadata?.totalCount || 0) / Number(limit)) ||
    query.data?.length ||
    0;

  const payoutData =
    debouncedSearch && !query.isFetching ? query.data : query.data?.data || [];

  const handlePageChange = (newPage: number) => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      <SubHeaderContainer>
        <SubTitle>Payout History</SubTitle>
        <Search onChange={handleSearchChange} />
        <CustomDropdown
          onChange={handleLimitChange}
          value={limit}
          label="Set Page Limit"
          options={limitOptions}
        />
      </SubHeaderContainer>
      <Table
        rows={payoutData || []}
        columns={payoutColumns}
        isLoading={isLoading}
        handlePageChange={handlePageChange}
        limit={limit}
        pageNo={pageNo}
        totalPageCount={pageCount}
      />
    </Main>
  );
}
