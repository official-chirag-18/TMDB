import React from 'react';

import {Loader} from '../Loader';
import ErrorComp from '../ErrorComp';
import NoDataComp from '../NoDataComp';

const RouteWaiter = ({loading, error = null, data, children}) => {
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : error ? (
        <ErrorComp />
      ) : !data ? (
        <NoDataComp />
      ) : (
        children
      )}
    </>
  );
};

export default RouteWaiter;
