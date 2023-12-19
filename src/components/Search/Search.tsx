import React from 'react';
import { SearchBox, SearchIcon, SearchInput } from './Search.styled';

export default function Search({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <SearchBox>
      <SearchInput
        type="search"
        placeholder="Search by User Name"
        onChange={onChange}
      />
      <SearchIcon className="fa fa-search" />
    </SearchBox>
  );
}
