import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/init.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Board from 'components/Board';
import { observe } from 'components/utils.js';

observe(taskPosition =>
render(
	<Board taskPosition={taskPosition} />,
	document.getElementById('app')
)
);
