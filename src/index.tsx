import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const errorMessage = () => {
  return <h2>Oops, an error has occurred, try refreshing the page</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={errorMessage}>
      <Router>
        <App/>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);