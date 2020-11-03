import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Pizza from './components/Pizza';
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      allPizza: [],
      changePizza: {
        id: '',
        topping: '',
        size: '',
        vegetarian: false
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => this.setState({
        allPizza: pizzas
      })
      )
  }

  editPizza = (pizza) => {
    this.setState({
      changePizza: pizza
    })
  }

  savePizza = () => {
    let pizzaObj = {
      topping: this.state.changePizza.topping,
      size: this.state.changePizza.size,
      vegetarian: this.state.changePizza.vegetarian
    }
    fetch(`http://localhost:3000/pizzas/${this.state.changePizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        topping: pizzaObj.topping,
        size: pizzaObj.size,
        vegetarian: pizzaObj.vegetarian
      })
    })
      .then(res => res.json())
      .then(edittedPizza => {
        this.setState({
          allPizza: this.state.allPizza.map(pizza => pizza.id === edittedPizza.id ? edittedPizza : pizza)
        })
      })
  }

  handleChange = (e) => {
    console.log('this is e.target name:', e.target.name, 'value:', e.target.value)
    if (e.target.name === 'topping') {
      this.setState({
        changePizza: { ...this.state.changePizza, topping: e.target.value }
      })
    } else if (e.target.name === 'size') {
      this.setState({changePizza: { ...this.state.changePizza, size: e.target.value }})
    } else { e.target.value === "true" ? this.setState({changePizza: { ...this.state.changePizza, vegetarian: true}}) : this.setState({changePizza: { ...this.state.changePizza, vegetarian: false}})}
  }



  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          changePizza={this.state.changePizza}
          savePizza={this.savePizza}
          handleChange={this.handleChange}
        />
        <PizzaList
          allPizza={this.state.allPizza}
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }
}

export default App;
