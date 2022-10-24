import React from 'react';
import LineChart from './LineChart';

const Statistics = () => {
  return (
    <div className="stat">
      <div className="stat-head">
        <h6>Statistics</h6>
        <div className="data-class">
          <p>Last 6 months</p>
          <div className="sprite small-down"></div>
        </div>
      </div>
      <div className="line-chart">
        <LineChart />
      </div>
    </div>
  );
};

export default Statistics;
