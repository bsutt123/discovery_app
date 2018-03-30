import React from 'react';
import styles from './page-control.module.css';

import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';
import DoubleAngleLeft from 'react-icons/lib/fa/angle-double-left';
import DoubleAngleRight from 'react-icons/lib/fa/angle-double-right';

const PageControl = ({page, setPage}) => {
  return (
    <div className={styles.container}>
      {page !== 1 &&
        (
          <span>
            <DoubleAngleLeft onClick={(e) => setPage(1, e)} />
            <AngleLeft onClick={(e) => setPage((page-1), e)} />
          </span>
        )
      }
      <span> Page Control </span>
      {
        page !== 1000 &&
        (
          <span>
            <AngleRight onClick={(e) => setPage((page+1), e)} />
            <DoubleAngleRight onClick={(e) => setPage(1000, e)} />
          </span>
        )
      }
    </div>
  )
};

export default PageControl;