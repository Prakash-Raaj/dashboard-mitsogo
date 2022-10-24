import React from 'react';
import PieChart from './PieChart';

const SalesDistribution = () => {
  return (
    <div className="sales-comp">
      <h6>Sales Distribution</h6>
      <div className="pie-chart">
        <PieChart />
      </div>
    </div>
  );
};

export default SalesDistribution;
