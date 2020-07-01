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
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter your item here" onChange={this.changeInputName} />
          <input type="number" placeholder="Enter your price here" onChange={this.changeInputPrice} />
        </form>
      </div>
    );
  }
  private inputName = "";
  private inputPrice = "";
  
  private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputName = event.target.value;
  }
  
  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("item name: " + this.inputName + "\nitem price: " + this.inputPrice);
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
