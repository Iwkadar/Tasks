let taskPosition = setTasks();
let observer = null;

function setTasks() {
  let taskPosition = [];
  for(let i=0; i<16; i++) {
    taskPosition[i] = [0, 0];
  }
  return taskPosition;
};

function emitChange() {
  observer(taskPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }
  observer = o;
  emitChange();
}

export function setTaskPosition() {
  taskPosition = JSON.parse(localStorage.getItem('taskPosition')) || taskPosition;
  emitChange();
}

export function moveTask(toX, toY, taskId) {
  taskPosition[taskId] = [toX, toY];
  localStorage.setItem('taskPosition', JSON.stringify(taskPosition));

  emitChange();
}
