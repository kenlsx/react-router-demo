import React ,{Component} from 'react'
import { HashRouter } from 'react-router-dom'

// 组件
import App from './App'

class Router extends Component {
  render(){
    return(
      <HashRouter>
        <App/>
      </HashRouter>
    )
  }
}

export default Router;