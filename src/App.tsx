import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppState {
  items: Array<string>
}
class App extends React.Component<{}, AppState> {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Shopping App</h1>
        </header>
        <p>This is Bunmi and Cami's shopping list app.</p>
        <ol>
          <li>hi</li>
          <li>milk</li>
          <li>eggs</li>
        </ol>
      </div>
    );
  }
}

class ShoppingItem {
  public name = "";
  public price = 0.0;
}
export default App;
