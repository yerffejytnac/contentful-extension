import React from 'react';
import { Root, Button } from './styled';

const App = () => {
  return (
    <Root>
      <button className="cf-btn-primary">Contentful Styles</button>
      <Button onClick={() => console.log('I was clicked!')}>
        Custom React Component
      </Button>
    </Root>
  );
};

export default App;
