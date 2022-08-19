import CardList from './CardList';
import Search from './Search';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import React, { Component } from 'react';



class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
      return res.json()
      }).then(users => {
      this.setState({robots : users })
    })
    
  }


  onSearchChange = (event) => {
    this.setState({searchField : event.target.value})
   

  }


  render() {

 const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

  return (
    <div className='whole-app'>
      <h1 className='title'>ROBOFRIENDS</h1>
      <Search searchChange={this.onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <div className='cards-app'>
         <CardList robots={filteredRobots}/>
          </div>
        </ErrorBoundary>
     </Scroll>
    </div>
  );
}


}

export default App;
