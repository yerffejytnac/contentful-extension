import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './styles/GlobalStyles';

window.contentfulExtension.init((extension) => {
  ReactDOM.render(
    <>
      <GlobalStyles />
      <App extension={extension} />
    </>,
    document.getElementById('root'),
  );
});
