import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';
import  {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <TodoApp />
    </div>
  );
}


export default App;
