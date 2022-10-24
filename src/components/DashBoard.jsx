import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProductVideo from './ProductVideo';
import SalesDistribution from './SalesDistribution';
import Statistics from './Statistics';
import User from './User';
import TableComponent from './TableComponent';

const DashBoard = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width:490px)' });
  const dashClass =
    props.nav === false ? 'dashboard' : 'dash-nav-open';
  return (
    <div className={dashClass}>
      <div className="overview-class">
        <h2>Overview</h2>
        <div className="btn-funds">
          Add Funds
          <div className="plus-icon">
            <div className="sprite icon_plus "></div>
          </div>
        </div>
      </div>
      {/* {
        
      } */}
      {isMobile ? (
        <div className="dash-grid">
          <div className="grid-1">
            <div className="charts">
              <User />
              <Statistics />
            </div>
            <SalesDistribution />
          </div>
          <div className="grid-2">
            <TableComponent />
            <ProductVideo nav={props.nav} />
          </div>
        </div>
      ) : (
        <div className="dash-grid">
          <div className="grid-1">
            <div className="charts">
              <Statistics />
              <SalesDistribution />
            </div>
            <TableComponent />
          </div>
          <div className="grid-2">
            <User />
            <ProductVideo nav={props.nav} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
