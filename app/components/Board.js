import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardSquare from './BoardSquare';
import Task from './Task';
import { setTaskPosition } from './../store'

import styles from './Board.scss';

class Board extends React.Component {
  constructor() {
    super();
    this.boxTitle = ['Tasks', 'User 2', 'User 1', 'User 3'];
    this.tasks = [];
    this.completeTasks();
  }

  componentWillMount() {
    setTaskPosition();
  }

  completeTasks() {
    for(let i=0; i<16; i++) {
      this.tasks[i] = 'Task ' + (i+1);
    }
  }

  renderTask(x, y, i) {
    const position = this.props.taskPosition[i];
    if(x === position[0] && y === position[1]) {
      return <Task key={i} name={this.tasks[i]} id={i}/>;
    }
  }

  renderTasks(x, y) {
    const tasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      tasks.push(this.renderTask(x,y,i));
    }
    return tasks;
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} className='col-sm-4'>
        <p className={styles.title}>{this.boxTitle[i]}</p>
        <BoardSquare x={x} y={y}>
          {this.renderTasks(x, y)}
          {i > 0 &&
          <h1></h1>}
        </BoardSquare>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 4; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div className='container'>
        <div id={styles.squaresWrapper} className='row'>
          {squares}
        </div>
      </div>
    );
  }
}


Board.propTypes = {
  taskPosition: PropTypes.array.isRequired
};

export default DragDropContext(HTML5Backend)(Board);
