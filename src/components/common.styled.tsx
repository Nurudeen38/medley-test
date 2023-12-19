import styled from 'styled-components';

export const Main = styled.main`
  padding: 2rem;
`;

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
  padding: 0.8rem 1rem;
  border-left: 1rem solid #999dff;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin-left: 2rem;
`;

export const Container = styled.div`
  padding: 2rem;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  font-weight: 500;
  font-size: 12px;
`;
export const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 150px;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;


export const Badge = styled.span<{ status?: string }>`
  border-radius: 6px;
  background: ${(props) =>
    props.status === 'Completed' ? '#60CA57' : '#6F767E66;'};
  color: #1a1d1f;
  display: inline-block;
  padding: 0.5rem 0.2rem;
  line-height: 1;
  min-width: 70px;
`;

export const  Wrapper = styled.section` 
position:relative ;
`