import React, { Component } from 'react'
import data from "./data"
import Header from "./Header"
import MainPage from "./MainPage"
import ShowPage from "./ShowPage"
import "./App.css"
import { Route } from "react-router-dom"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      inputValue:'',
    }
    console.log(data)
  }

  componentDidMount() {
    this.setState({
      image: data
    })
    // console.log(data[0].price)
  }

  handleChange = (e) => {
    // console.log("change",e.target.value)
    this.setState({
      inputValue:e.target.value
    })
  }


  render() {


    return (
      <div>
        <Header />

      

        <Route path="/" exact>
          <MainPage
            data={this.state.image}
            onChange={this.handleChange}
            inputValue={this.state.inputValue}
            
          />
        </Route>

        <Route path="/image/:name">
          <ShowPage data={this.state.image} />
        </Route>

      </div>
    )
  }
}

