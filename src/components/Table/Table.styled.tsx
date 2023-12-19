import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  vertical-align: top;
  border-collapse: collapse;
  border-radius: 0.2rem;
  overflow: hidden;
`;
export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const ThRow = styled.tr`
  color: #6f767e;
`;
export const Trow = styled.tr<{ isEven?: boolean }>`
  background: ${(props) => (props.isEven ? '#F4F4F480;' : '#ffffff')};
  &:hover {
    background: #f2f2f2;
  }
`;
export const Th = styled.th`
  padding: 0.5rem 0.5rem;
  font-size: 12px;
  font-weight: 500;
`;
export const Td = styled.td`
  padding: 0.5rem 0.5rem;
  font-size: 14px;
  font-weight: 600;
  color: #6f767e;
  text-align: center;
`;
