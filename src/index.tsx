import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import '_static/css/style.css';
import EntryPoint from './entry-point';


ReactDOM.render(
    <StrictMode>
      <EntryPoint />
    </StrictMode>,
  document.querySelector('#root'),
);