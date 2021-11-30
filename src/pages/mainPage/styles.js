import styled from "styled-components";

export const Container = styled.div`
  width: 1100px;
  margin: 20px auto;
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  width: 49%;
  padding: 10px;
`;

export const Search = styled.input`
  width: 49%;
  padding: 10px;
`;

export const TableWrapper = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  margin: 20px 0;
  &,
  th,
  td {
    border: 1px solid black;
    text-align: center;
  }
`;
