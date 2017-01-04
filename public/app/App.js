import React,{ Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return (
      <div>Hello World!!</div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div>About page </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))
