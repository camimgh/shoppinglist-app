import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppState {
  items: Array<string>
}
class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props); //why does it not accept super(props, state)??
    this.state = {
      items: ["Pizza", "Egg", "Milk"]
    }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Shopping App</h1>
        </header>
        <p>This is Bunmi and Cami's shopping list app.</p>
        <ol>
          {this.state.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}
class ShoppingItem {
  public name = "";
  public price = 0.0;
}

const pizza: ShoppingItem = {
  name: "Pizza",
  price: 4.5
}

const egg: ShoppingItem = {
  name: "Egg",
  price: 10
}

const milk: ShoppingItem = {
  name: "Milk",
  price: 3.5
}
export default App;
