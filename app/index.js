import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/init.scss';

import React from 'react';
import { render } from 'react-dom';
import Board from 'components/Board';
import { observe } from 'store';

observe(taskPosition =>
render(
	<Board taskPosition={taskPosition} />,
	document.getElementById('app')
)
);
