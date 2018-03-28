import React from 'react';
import styles from './page-control.module.css';

import ArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import ArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

const PageControl = () => {
  return (
    <div className={styles.container}>
      <ArrowCircleLeft />
      <ArrowCircleRight />
    </div>
  )
};

export default PageControl;