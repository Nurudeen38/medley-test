import styled from "styled-components";

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;
export const SearchInput = styled.input`
  width: calc(100% - 2.8rem);
  padding: 0.6rem 0.6rem 0.6rem 2rem;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin-right: 0.5rem;
  &:focus {
    border-color: #86b7fe;
    background: #fff;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    color: #212529;
  }
`;
export const SearchIcon = styled.i`
  position: absolute;
  top: 0.65rem;
  left: 0.5rem;
`;