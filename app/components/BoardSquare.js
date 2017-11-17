import React from 'react';
import PropTypes from 'prop-types';
import { moveTask } from './../store';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

import styles from './BoardSquare.scss';

const squareTarget = {
  drop(props, monitor) {
    const { taskId } = monitor.getItem();
    moveTask(props.x, props.y, taskId);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class BoardSquare extends React.Component {
  render() {
    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div className={styles.square}>
        <div className={styles.content}>
          {this.props.children}
        </div>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.TASK, squareTarget, collect)(BoardSquare);
