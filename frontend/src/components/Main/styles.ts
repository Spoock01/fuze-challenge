import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 140px;

  .ant-table-column-sorter-up.active {
    color: var(--purple-light);
  }

  .ant-table-column-sorter-down.active {
    color: var(--purple-light);
  }

  .ant-table-thead {
    .ant-table-cell {
      background-color: #e2e7ec;
      font-weight: bold;
    } 
  }
`