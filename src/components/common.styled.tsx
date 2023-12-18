import styled from "styled-components"

export const Main = styled.main`
padding: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5em;
  font-family: sans-serif;
  margin-top: 0;
  margin-bottom: 2rem;
  color: #040529;
`;


export const SubTitle = styled(Title)`
  font-size: 1.5em;
  font-family: sans-serif;
  background: #fff;
  padding: .8rem 1rem;
  border-left: 1rem solid #999DFF;
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem;
`;

export const Container = styled.div`
  padding: 2rem;
`

export const Caption = styled.caption`
display: table-caption;
justify-content:space-between
`

export const CaptionContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
export const Select = styled.select`
    display: block;
    width: 100%;
    max-width: 150px;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
    }
`
export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`
export const SearchInput  = styled.input`
  width: calc(100% - 2.8rem);
  padding: .6rem .6rem .6rem 2rem;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin-right: .5rem;
  &:focus {
    border-color: #86b7fe;
    background: #fff;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
    color: #212529;
  }
`
export const SearchIcon = styled.i`
  position: absolute;
  top: .65rem;
  left: .5rem;
`
export const Table = styled.table`
  width: 100%;
  margin-top: .8rem;
  margin-bottom: 1rem;
  vertical-align: top;
  border-collapse: collapse;
  border-radius: .2rem;
  overflow: hidden;
`
export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const ThRow = styled.tr`

`
export const Trow = styled.tr<{isEven?: boolean;}>`
  background: ${props => props.isEven ? '#f2f2f2' : '#ffffff'};
  &:hover {
    background: #f2f2f2;
  }
`
export const Th = styled.th`
  padding: 0.5rem 0.5rem;
  color: black;
`
export const Td = styled.td`
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  text-align: center;
`
export const Pagination = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  align-items: center;
  justify-content: center
`

export const PageItem = styled.li``

export const PageLink = styled.a<{isDisable?: boolean; isActive?: boolean}>`
  position: relative;
  padding: 0.375rem 0.75rem;
  display: block;
  color: ${props => props.isActive ? '#fff' : props.isDisable ? '#888' : '#0d6efd'};
  background-color: ${props => props.isActive ? '#0d6efd' : props.isDisable ? '#e7e7e7' : '#fff'};
  cursor: ${props => props.isDisable ? 'not-allowed' : 'pointer'};
  border: 1px solid #dee2e6;
`

export const Badge = styled.span<{status?: string;}>`
  border-radius: 50rem;
  background: ${props => props.status === 'Pending' ? 'linear-gradient(0deg, #f59fa7, red);' : 'linear-gradient(0deg, #53c38f, #006100);'};
  color: #fafafa;
  display: inline-block;
  padding: 0.3rem .5rem;
  line-height: 1;
  min-width: 100px;
`