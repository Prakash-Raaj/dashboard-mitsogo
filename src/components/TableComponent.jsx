import React from 'react';
import BasicTable from './BasicTable';

const TableComponent = () => {
  return (
    <div className="table-component">
      <h5>Referrer</h5>
      <BasicTable />
      <div className="show-button-table">Show More</div>
    </div>
  );
};

export default TableComponent;
