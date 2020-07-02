import React from 'react';
import './App.css';

class ShoppingItem {
  public name = "";
  public price = 0.0;
}

interface AppState {
  items: Array<ShoppingItem>
}
class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props); //why does it not accept super(props, state)??
    
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
    this.state = {
      items: [pizza, egg, milk]
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
            <li key={item.name}>{item.name} ${item.price}</li>
          ))}
        </ol>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter your item here" onChange={this.changeInputName} />
          <input type="number" step=".01" placeholder="Enter your price here" onChange={this.changeInputPrice} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
  private inputName = "";
  private inputPrice = "";
  
  private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputName = event.target.value;
  }

  private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputPrice = event.target.value;
  }
  
  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("item name: " + this.inputName + "\nitem price: " + this.inputPrice);
    const newItem: ShoppingItem = { name: this.inputName, price: parseFloat(this.inputPrice) }
    this.setState({
      items: this.state.items.concat(newItem)
    });
  }
}
export default App;
