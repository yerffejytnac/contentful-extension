import React from 'react';
import { Root, Button } from './styled';

const App = () => {
  return (
    <Root>
      <Button onClick={() => console.log('I was clicked!')}>
        I am a button
      </Button>
    </Root>
  );
};

export default App;
