import React from 'react';

import styles from './Collection.scss'

class Collection extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-4 col-xs-offset-4'>
            <p>Tasks</p>
            <div className={styles.square}>
            </div>
          </div>
        </div>
        <div id={styles.podium} className='row'>
          <div className='col-xs-4'>
            <p>User 2</p>
            <div className={styles.square}>
              <h1>2</h1>
            </div>
          </div>
          <div className='col-xs-4'>
            <p>User 1</p>
            <div className={styles.square}>
              <h1>1</h1>
            </div>
          </div>
          <div className='col-xs-4'>
            <p>User 3</p>
            <div className={styles.square}>
              <h1>3</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
