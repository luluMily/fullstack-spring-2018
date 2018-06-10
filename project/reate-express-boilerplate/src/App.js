import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    error: false,
    loading: false
  }
  async componentDidMount() {
    try {
      const response =  await axios.get('/healthcheck')
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }

    // await axios.get('/healthcheck').then(response => {
    //   console.log(response.data)
    // }).catch(error => {
    //   this.setState({error: error})
    // })
  }
  render () {
    return (
      <div>Hello world</div>
    )
  }
}

export default App